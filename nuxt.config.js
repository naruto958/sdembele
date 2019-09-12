
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Open+Sans&display=swap"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#58A72A' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/sitemap', {
      gzip: true,
      exclude: [
        '/secret',
        '/admin'
      ],
    }]
  ],
  // sitemap: {
  //       exclude: [
  //     '/secret',
  //     '/admin/**'
  //   ],
  // },
  sitemap: {
    filter ({ routes, options }) {
      if (options.hostname === 'https://sdembele.me/') {
        return routes.filter(route => route.locale === 'en')
      }
      return routes.filter(route => route.locale === 'fr')
    }
  },
  sitemap: {
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    }
  },
  sitemap: {
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  },
  sitemap: {
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  // sitemap: {
  //   hostname: 'http://localhost:3000/',
  //   gzip: true,
  //   exclude: [
  //     '/secret',
  //     '/admin/**'
  //   ],
  //   routes: [
  //     '/',
  //     {
  //       url: '/',
  //       changefreq: 'daily',
  //       priority: 1,
  //       lastmodISO: '2019-09-30T13:30:00.000Z'
  //     },
  //     '/about/',
  //     {
  //       url: '/about/',
  //       changefreq: 'daily',
  //       priority: 2,
  //       lastmodISO: '2019-09-30T13:30:00.000Z'
  //     },
  //     '/projects',
  //     {
  //       url: '/projects/',
  //       changefreq: 'daily',
  //       priority: 3,
  //       lastmodISO: '2019-09-30T13:30:00.000Z'
  //     },
  //     '/lab',
  //     {
  //       url: '/lab/',
  //       changefreq: 'daily',
  //       priority: 4,
  //       lastmodISO: '2019-09-30T13:30:00.000Z'
  //     },
  //     '/contact/',
  //     {
  //       url: '/contact/',
  //       changefreq: 'daily',
  //       priority: 5,
  //       lastmodISO: '2019-09-30T13:30:00.000Z'
  //     }
  //   ]
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  serverMiddleware: ['redirect-ssl'],

}

