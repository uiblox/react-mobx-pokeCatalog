import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./docs",
  },
  base: "/react-mobx-pokeCatalog", // this is IMPORTANT! this is required to update path of your root project based on the github project name.
});
