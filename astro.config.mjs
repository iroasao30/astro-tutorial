import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://iroasao-astro.netlify.app/",
  integrations: [preact()],
});