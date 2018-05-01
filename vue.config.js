module.exports = {
  // Project deployment base, by default we assume your app will be deployed at the root of a domain, e.g. https://www.my-app.com/
  // if your app is deployed at a sub-path, you will need to specify that sub-path here, for example,
  // if your app is deployed at https://www.foobar.com/my-app/ then change this to '/my-app/'
  baseUrl: '/',

  // where to output built files
  outputDir: 'dist',
  lintOnSave: true,

  // use the full build with in-browser compiler? https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  compiler: false,
  // https://vue-loader.vuejs.org/en/options.html
  vueLoader: {},

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    extract: true
  },

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },

  // options for 3rd party plugins
  pluginOptions: {
  }
}
