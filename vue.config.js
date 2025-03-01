module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/WEBDEV01/'  // Repository name with trailing slash
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets',  // Make sure this matches your project structure
  // Don't disable filename hashing as it's useful for cache busting
  // filenameHashing: false
}
