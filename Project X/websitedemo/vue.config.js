const path = require('path')

module.exports = {
  chainWebpack: config => {
    const apiClient = process.env.API_CLIENT
    config.resolve.alias
      .set('service', path.resolve(__dirname, `src/api/${apiClient}`))
  }
}
