import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // IMPORTANT for GitHub Pages
  base: "/Naveen-s-Portfolio/",

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});