export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '台灣旅遊景點導覽',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: '台灣旅遊景點導覽', name: '台灣旅遊景點導覽', content: '台灣旅遊景點導覽' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/scss/main.scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'

  ],
  styleResources: {
    scss: '@assets/scss/main.scss'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  publicRuntimeConfig: {
    baseURL: 'https://v2.nuxt.com'
  },
  privateRuntimeConfig: {
    appKey: process.env.appKey,
    appID: process.env.appID
  }
}
