export default defineNuxtConfig({
  css: ["assets/scss/reset.scss"],
  ssr: false,
  buildDir: "dist",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/common.scss";',
        },
      },
    },
  },

  modules: ["dayjs-nuxt"],
  plugins: ["~/plugins/firebase.client.js"],
});
