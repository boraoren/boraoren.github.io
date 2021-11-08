const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    /*i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en-US', 'tr-TR'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en-US',
    },*/
    assetPrefix: isProd ? '/showcase' : ''
  }