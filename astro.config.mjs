// @ts-check

import svelte from "@astrojs/svelte";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import starlightCatppuccin from "@catppuccin/starlight";

export default defineConfig({
  site: "https://www.codehealergroup.com",
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [
    svelte(),
    sitemap(),
    starlight({
      title: "Code Healer Group",
      // social: [
      //   {
      //     label: "GitHub",
      //     href: "https://github.com/withastro/starlight",
      //     icon: "github",
      //   },
      // ],
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: "https://www.codehealergroup.com/og.png" },
        },
      ],
      customCss: ["./src/styles/global.css"],
      plugins: [
        starlightCatppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" },
        }),
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
});
