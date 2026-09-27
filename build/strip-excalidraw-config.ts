import type { Plugin } from 'vite';

const configKey = 'VITE_APP_FIREBASE_CONFIG';

// Excalidraw 0.18.0 ships its website's Firebase config in the npm bundle,
// although the embedded editor and SVG exporter never read this field.
export function stripExcalidrawConfig(): Plugin {
  return {
    name: 'strip-excalidraw-website-firebase-config',
    enforce: 'pre',
    transform(code, id) {
      if (!/\/node_modules\/@excalidraw\/excalidraw\/dist\/(?:prod|dev)\/[^/]+\.js$/.test(id.split('?')[0].replaceAll('\\', '/')) || !code.includes(configKey)) return null;

      const ast = this.parse(code);
      const removals: Array<[number, number]> = [];
      for (const statement of ast.body) {
        if (statement.type !== 'VariableDeclaration') continue;
        for (const declaration of statement.declarations) {
          if (declaration.init?.type !== 'ObjectExpression') continue;
          const properties = declaration.init.properties as Array<
            (typeof declaration.init.properties)[number] & { start: number; end: number }
          >;
          for (let i = 0; i < properties.length; i++) {
            const property = properties[i];
            if (property.type !== 'Property' || property.computed) continue;
            const key = property.key.type === 'Identifier' ? property.key.name : property.key.type === 'Literal' ? property.key.value : undefined;
            if (key !== configKey) continue;
            // Include the following comma, or the preceding comma for the last field.
            removals.push(i + 1 < properties.length
              ? [property.start, properties[i + 1].start]
              : [i > 0 ? properties[i - 1].end : property.start, property.end]);
          }
        }
      }
      if (removals.length !== 1) this.error(`Expected one Excalidraw Firebase config field; found ${removals.length}. Review the upgraded dependency before publishing.`);
      for (const [start, end] of removals.sort((a, b) => b[0] - a[0])) code = code.slice(0, start) + code.slice(end);
      return { code, map: null };
    },
  };
}
