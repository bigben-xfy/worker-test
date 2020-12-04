module.exports = {
  chainWebpack: config => {
    // config.output.globalObject("this");
    config.module
      .rule("worker")
      .test(/\.worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .options({
        inline: "fallback"
      })
      .end();
    //处理web-worker不刷新的问题
    config.module.rule("js").exclude.add(/\.worker\.js$/);
  }
};
