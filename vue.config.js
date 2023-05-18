const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        prependData: '@import "@/styles/index.less";',
      },
    },
  },
  devServer: {
    hot: true,
    open: true
  }
})
