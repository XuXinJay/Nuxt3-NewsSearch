// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "NEWS Search",
    },
  },
});
