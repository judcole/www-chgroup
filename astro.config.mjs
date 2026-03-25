import svelte from "@astrojs/svelte";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import starlightCatppuccin from "@catppuccin/starlight";

// Configuration from https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://www.codehealergroup.com",
  base: "/",
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [
    svelte(),
    sitemap(),
    starlight({
      title: "Code Healer Group",
      components: {
        Footer: "./src/components/Footer.astro",
        Header: "./src/components/Header.astro",
      },
      customCss: ["./src/styles/global.css"],
      head: [
        {
          tag: "meta",
          attrs: { name: "Robots", content: "all" },
        },
        {
          tag: "meta",
          attrs: {
            name: "description",
            content:
              "Providing expert software architecture, development, security, management, and leadership consulting services to its clients since 2001",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content:
              "ai architecture cole consulting contracting jud leadership rust security software",
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:description", content: "Code Healer Group website" },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://www.codehealergroup.com/images/chgroup_logo.gif",
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:type", content: "website" },
        },
      ],
      plugins: [
        starlightCatppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" },
        }),
      ],
      social: [
        {
          label: "GitHub",
          href: "https://github.com/judcole",
          icon: "github",
        },
      ],
    }),
  ],
  trailingSlash: "always",
});
