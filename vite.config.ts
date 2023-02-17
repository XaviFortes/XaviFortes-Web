import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["stream", "os"],
  },
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
