import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: {
        index: "src/index.ts",
        "web-component": "src/web-component.ts"
      },
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        assetFileNames: "style.css",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js"
      }
    }
  }
});
