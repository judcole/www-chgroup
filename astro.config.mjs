// 2026-03-26 Main Astro configuration

import sitemap from "@astrojs/sitemap"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import starlightCatppuccin from "@catppuccin/starlight"
import icon from "astro-icon"
import { defineConfig } from "astro/config"
import starlightFullViewMode from "starlight-fullview-mode"
import starlightLinksValidator from "starlight-links-validator"

// Configuration from https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [
    icon(),
    svelte(),
    sitemap(),
    starlight({
      components: {
        Footer: "./src/components/Footer.astro",
        // Header: "./src/components/Header.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
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
            content: "ai architecture cole consulting contracting jud leadership rust security software",
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
      logo: {
        src: "./src/images/chgroup_logo.gif",
        alt: "Code Healer Group logo",
        replacesTitle: true,
      },
      plugins: [
        starlightCatppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" },
        }),
        starlightFullViewMode({
          //   leftSidebarEnabled: true,
          //   rightSidebarEnabled: true,
          //   leftSidebarExpandedWidth: "5%",
        }),
        starlightLinksValidator(),
      ],
      social: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/judcole",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          href: "https://github.com/judcole",
          icon: "github",
        },
      ],
      tableOfContents: { minHeadingLevel: 4, maxHeadingLevel: 5 },
      title: "",
    }),
  ],
  site: "https://www.codehealergroup.com",
  trailingSlash: "always",
})
