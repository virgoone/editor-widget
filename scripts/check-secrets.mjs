import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export function findGoogleApiKeys(content) {
  const pattern = /AIza[0-9A-Za-z_-]{35}(?![0-9A-Za-z_-])/g;
  return [...content.matchAll(pattern)].map(match => ({
    line: content.slice(0, match.index).split('\n').length,
    kind: 'Google API key',
  }));
}

export async function scanDirectory(directory) {
  let files = 0;
  const findings = [];
  async function visit(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const filename = path.join(dir, entry.name);
      if (entry.isDirectory()) await visit(filename);
      else if (entry.isFile()) {
        files++;
        for (const finding of findGoogleApiKeys(await readFile(filename, 'utf8'))) {
          findings.push({ file: path.relative(directory, filename), ...finding });
        }
      }
    }
  }
  await visit(directory);
  if (files === 0) throw new Error('No build artifacts found; build dist before publishing.');
  return { files, findings };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  try {
    const directory = process.argv[2] ? path.resolve(process.argv[2]) : fileURLToPath(new URL('../dist/', import.meta.url));
    const { files, findings } = await scanDirectory(directory);
    if (findings.length) {
      // Deliberately report only locations, never credential values.
      for (const finding of findings) console.error(`${finding.file}:${finding.line}: ${finding.kind}`);
      console.error(`Blocked: ${findings.length} Google API key occurrence(s) in ${files} build artifacts.`);
      process.exitCode = 1;
    } else console.log(`Scanned ${files} build artifacts: no Google API keys found.`);
  } catch (error) {
    console.error(`Artifact scan failed: ${error.message}`);
    process.exitCode = 1;
  }
}
