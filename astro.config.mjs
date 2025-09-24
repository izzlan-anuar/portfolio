// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://izzlan-anuar.github.io/portfolio", // ✅ Required for GitHub Pages
  base: "/portfolio", 
  outDir: "dist",
  vite: {
    plugins: [tailwindcss()],
  },
});