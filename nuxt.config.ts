export default defineNuxtConfig({
  dev: false,
  server: {
    port: 3020,
  },
  runtimeConfig: {
    apiSecret: process.env.API_TOKEN || "", // can be overridden by NUXT_API_SECRET environment variable
    apiBase: process.env.API_BASE_URL || "", // can be overridden by NUXT_API_BASE environment variable
  },
  app: {
    head: {
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      meta: [
        {
          name: "description",
          content:
            "Frontend Web Developer, I design and code things on the web.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: "Javascript is required" },
      ],
    },
  },
  css: ["@/assets/css/main.scss"],
  modules: ["@vueuse/nuxt", "nuxt-lodash"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
