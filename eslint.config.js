/*
    2026-04-27 ESLint configuration
*/

import eslint from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import eslintPluginSvelte from "eslint-plugin-svelte"
import { defineConfig } from "eslint/config"
import svelteParser from "svelte-eslint-parser"
import tseslint from "typescript-eslint"

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".svelte"],
      },
    },
    plugins: {
      eslintPluginAstro,
    },
  },
  {
    rules: {
      // Add custom rules here
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  }
)
