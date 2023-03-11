import { defineConfig } from "vite";
import { resolve } from "path";

import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  resolve: {
    alias: {
      "@vendors": resolve(__dirname, "node_modules"),
    },
  },
  plugins: [
    ViteEjsPlugin(
      {
        title: "Uifry - Static Landing Page",
      },
      {
        ejs: () => ({
          filename: "src/includes/*.ejs",
        }),
      }
    ),
  ],
});
