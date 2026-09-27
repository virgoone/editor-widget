import { expect, test } from 'bun:test';
import { mkdtemp, mkdir, writeFile, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { rollup } from 'rollup';
import { runInNewContext } from 'node:vm';
import { stripExcalidrawConfig } from '../build/strip-excalidraw-config';
import { findGoogleApiKeys, scanDirectory } from '../scripts/check-secrets.mjs';

const fakeKey = 'AIza' + '0'.repeat(35);

test('sanitizes the actual installed production and development modules while preserving all other exports', async () => {
  for (const mode of ['prod', 'dev']) {
    const root = path.resolve(`node_modules/@excalidraw/excalidraw/dist/${mode}`);
    const { readdir } = await import('node:fs/promises');
    const candidates = [];
    for (const file of await readdir(root)) {
      if (file.endsWith('.js') && (await readFile(path.join(root, file), 'utf8')).includes('VITE_APP_FIREBASE_CONFIG')) candidates.push(path.join(root, file));
    }
    expect(candidates.length).toBe(1);
    const filename = candidates[0];
    const original = await import(filename);
    const build = await rollup({ input: filename, plugins: [stripExcalidrawConfig()] });
    try {
      const { output } = await build.generate({ format: 'cjs' });
      const chunk = output[0];
      if (chunk.type !== 'chunk') throw new Error('Expected JS output');
      expect(findGoogleApiKeys(chunk.code)).toEqual([]);
      const context = { exports: {} as Record<string, unknown> };
      runInNewContext(chunk.code, context);
      const cleaned = context.exports;
      for (const name of Object.keys(original)) {
        const { VITE_APP_FIREBASE_CONFIG, ...expected } = original[name];
        expect(typeof VITE_APP_FIREBASE_CONFIG).toBe('string');
        expect(cleaned[name]).toEqual(expected);
      }
    } finally { await build.close(); }
  }
});

test('scans nested artifacts and source maps without returning credential values', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'editor-widget-scan-'));
  try {
    await mkdir(path.join(root, 'chunks'));
    await writeFile(path.join(root, 'chunks', 'test.js.map'), JSON.stringify({ sourcesContent: [`const key = '${fakeKey}'`] }));
    await writeFile(path.join(root, 'index.js'), 'export const safe = true;');
    const result = await scanDirectory(root);
    expect(result.files).toBe(2);
    expect(result.findings).toEqual([{ file: 'chunks/test.js.map', line: 1, kind: 'Google API key' }]);
    expect(JSON.stringify(result)).not.toContain(fakeKey);
    const child = Bun.spawnSync(['bun', 'scripts/check-secrets.mjs', root]);
    expect(child.exitCode).toBe(1);
    expect(child.stderr.toString()).not.toContain(fakeKey);
    await writeFile(path.join(root, 'chunks', 'test.js.map'), '{}');
    const clean = Bun.spawnSync(['bun', 'scripts/check-secrets.mjs', root]);
    expect(clean.exitCode).toBe(0);
    expect(clean.stdout.toString()).toContain('no Google API keys found');
  } finally { await rm(root, { recursive: true, force: true }); }
});

test('fails closed if artifacts are empty or missing', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'editor-widget-empty-'));
  try {
    await expect(scanDirectory(root)).rejects.toThrow('No build artifacts');
    await expect(scanDirectory(path.join(root, 'missing'))).rejects.toThrow();
  } finally { await rm(root, { recursive: true, force: true }); }
});
