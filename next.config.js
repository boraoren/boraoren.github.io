const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    assetPrefix: isProd ? '/' : '/',
    trailingSlash: true,
    output: 'export',
}
