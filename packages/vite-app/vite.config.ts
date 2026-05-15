import { defineConfig } from "vite";
import { NodePackageImporter } from "sass-embedded";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        importers: [new NodePackageImporter()],
      },
    },
  },
  plugins: [react()],
});
