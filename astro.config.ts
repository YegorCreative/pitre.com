import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Project Pages is served at /pitre.com/ until the custom domain is connected.
// Leave PAGES_BASE unset for the production root at https://pitre.com.
const pagesBase = (process.env.PAGES_BASE ?? "").replace(/^\/|\/$/g, "");

export default defineConfig({
  site: pagesBase ? "https://yegorcreative.github.io" : "https://pitre.com",
  base: pagesBase ? `/${pagesBase}` : "/",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
