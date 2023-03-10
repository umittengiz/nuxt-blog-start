// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots"],
  typescript: {
    shim: false,
  },
  pages: true,
});
