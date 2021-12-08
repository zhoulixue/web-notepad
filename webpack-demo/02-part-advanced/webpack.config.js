const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './main.js',
  // devtool: 'eval', // 默认值
  // devtool: 'source-map',
  // devtool: 'hidden-source-map', // 会生成map但是不会关联
  // devtool: 'inline-source-map', // 不会单独打包map文件
  // devtool: 'eval-source-map',
  // devtool: 'cheap-source-map', // 生成没有列信息的map文件
  devtool: 'cheap-module-source-map', // 开发环境下推荐使用
  output: {
    publicPath: '/'
  },
  devServer: {
    static: '/',
    compress: true, // Content-Encoding: gzip;
    port: 3000,
    headers: {
      'X-access-token': '123',
    },
    https: true,
    http2: true,
    proxy: {
      '/api': 'http://localhost:9000',
    },
    historyApiFallback: true, // 跳转任意路由
    host: '0.0.0.0',
  },
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
