import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@vendors": resolve(__dirname, "node_modules"),
    },
  },
});
