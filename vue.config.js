module.exports = {
  chainWebpack: config => {
    config.output
      .globalObject('this')
    config.module
    .rule('worker')
    .test(/\.worker\.js$/)
    .use('worker-loader')
      .loader('worker-loader')
      .end()
  }
}