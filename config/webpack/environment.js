const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const vue =  require('./loaders/vue')

environment.loaders.append('typescript', typescript)
environment.loaders.append('vue', vue)

environment.config.merge({
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm'
    }
  }
})

module.exports = environment
