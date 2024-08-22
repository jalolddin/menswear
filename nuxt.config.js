const apiUrl = 'https://api.elbe.uk'

export default {
  server: {
    port: 8001
  },

  head: {
    title: 'lb-menswear-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  telemetry: false,

  css: [
    '@/assets/style/main.scss'
  ],

  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '@/plugins/vue-inputmask', ssr: false },
    { src: '@/plugins/vuelidate', ssr: true },
    { src: '@/plugins/axios', ssr: true },
    { src: '@/plugins/vue-cookies', ssr: true },
    { src: '@/plugins/browser-check.js' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    ['bootstrap-vue/nuxt', { icons: false }],
    '@nuxtjs/auth-next',
    '@nuxtjs/axios', [
      'nuxt-i18n',
      {
        locales: [{
          code: 'ru',
          file: 'ru-RU.js'
        },
        {
          code: 'uz',
          file: 'uz-UZ.js'
        },
        {
          code: 'en',
          file: 'en-EN.js'
        }
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang/'
      }
    ]
  ],

  axios: {
    baseURL: apiUrl
  },

  build: {
    transpile: [
      'defu'
    ]
  },

  auth: {
    plugins: [{ src: '@/plugins/axios', ssr: true }],
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 432000,
          autoLogout: true
        },
        user: {
          property: 'data',
          autoFetch: false
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: false,
          user: { url: '/auth/me', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      product: ''
    }
  }
}
