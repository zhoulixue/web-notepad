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
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
