module.exports = {
  pwa: {
    themeColor: '#FFF'
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].description = ''
        return args
      })
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/trading-charts/'
    : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
}
