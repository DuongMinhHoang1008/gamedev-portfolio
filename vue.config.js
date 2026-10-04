const { codeInspectorPlugin } = require('code-inspector-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/gamedev-portfolio/' : '/',
  chainWebpack: (config) => {
    config.plugin('code-inspector-plugin').use(
      codeInspectorPlugin({
        bundler: 'webpack',
      })
    );
  },
};
