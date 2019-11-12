require('dotenv').config();
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 
  head: {
    title: 'Limmex Construction | Largest heavy equipment supplier in bangladesh | Lowest Price  Heavy Equipment Rental In Bangladesh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content : 'Limmex,Limmex Bangladesh,limmex construction,Excavetor,Dozer,Crane,Dump Truck,Mixer Truck,Generator,Hand Compector,Heavy Equipment in Bangladesh' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/fontawesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/owl.carousel.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/magnific-popup.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/loader.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/flaticon.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/skin/skin-1.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'plugins/revolution/revolution/css/settings.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'plugins/revolution/revolution/css/navigation.css' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' }
    ],
    script: [
      { src:'js/jquery-1.12.4.min.js' } , 
      { src:'js/bootstrap.min.js' } , 
      { src:'js/magnific-popup.min.js' } , 
      { src:'js/waypoints.min.js' } , 
      { src:'js/counterup.min.js' } , 
      { src:'js/waypoints-sticky.min.js' } , 
      { src:'js/isotope.pkgd.min.js' } , 
      { src:'js/owl.carousel.min.js' } , 
      { src:'js/jquery.owl-filter.js' } , 
      { src:'js/stellar.min.js' } , 
      // { src:'js/custom.js' } , 
      { src:'js/shortcode.js' } , 
      { src:'js/jquery.bgscroll.js' } , 
      { src:'plugins/revolution/revolution/js/jquery.themepunch.tools.min.js' } , 
      { src:'plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js' } , 
      { src:'plugins/revolution/revolution/js/extensions/revolution-plugin.js' } , 
      // { src:'js/rev-script-1.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css:[
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
    { src: '~plugins/vue-particles.js', ssr: false }


  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  // environment 

  env: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost/limmex-back/api/'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // vendor: ['vue-particles'],
    extend (config, ctx) {
    }
  }
}
