import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { stripExcalidrawConfig } from "./build/strip-excalidraw-config";

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [stripExcalidrawConfig(), react(), tailwindcss()],
  resolve: {
    alias: [
      { find: /^@bunship-ai\/editor\/(.*)$/, replacement: r("vendor/editor/$1") },
      { find: "@bunship-ai/editor", replacement: r("vendor/editor/index.tsx") },
      { find: /^@bunship-ai\/ui\/(.*)$/, replacement: r("vendor/ui/$1") },
      { find: "@bunship-ai/ui", replacement: r("vendor/ui") },
    ],
    dedupe: ["react", "react-dom"],
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env.PUBLIC_UPLOAD_API_URL": JSON.stringify("/api/upload"),
    "process.env": "{}",
    global: "globalThis",
  },
  build: {
    cssCodeSplit: false,
    target: "es2020",
    lib: {
      entry: {
        index: "src/index.ts",
        drawings: "src/drawings.ts",
        "web-component": "src/web-component.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: (asset) => asset.names?.some(name => name.endsWith(".css")) ? "style.css" : "assets/[name]-[hash][extname]",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
  },
});
