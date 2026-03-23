// @ts-check

import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.codehealergroup.com",
  integrations: [svelte(), sitemap()],
});
