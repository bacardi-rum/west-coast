import colors from 'vuetify/es5/util/colors'
import { zhHans, en } from 'vuetify/src/locale'
import { localZhHans, localEn } from './locales'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - west-coast',
    title: 'west-coast',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.blueGrey.lighten1,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.orange.base,
          error: colors.red.base,
          success: colors.green.lighten1
        },
        // dark: {
        //   primary: colors.indigo.darken2,
        //   accent: colors.deepPurple.darken3,
        //   secondary: colors.blue.darken3,
        //   info: colors.blueGrey.lighten1,
        //   warning: colors.orange.base,
        //   error: colors.red.accent4,
        //   success: colors.lightGreen.accent3
        // },
        // light: {
        //   primary: colors.indigo.base,
        //   secondary: colors.pink.base,
        //   accent: colors.deepPurple.base,
        //   error: colors.red.base,
        //   warning: colors.orange.base,
        //   info: colors.blueGrey.base,
        //   success: colors.lightGreen.base
        // },
        light: {
          primary: colors.blue.darken2,
          secondary: colors.amber.darken3,
          accent: colors.blueGrey.lighten1,
          error: colors.red.lighten1,
          warning: colors.orange.base,
          info: colors.teal.lighten1,
          success: colors.green.base
        }
      }
    },
    lang: {
      locales: {
        zhHans: {
          ...zhHans,
          ...localZhHans
        },
        en: {
          ...en,
          ...localEn
        }
      },
      current: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
