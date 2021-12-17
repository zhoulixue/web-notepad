const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin }  = require('webpack').container

exports.default = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'nav', // 标识模块联邦的名字
      filename: 'remoteEntry.js', // 使用此模块的应用访问此模块的路径
      remotes: {}, // 引用其他应用的组建
      exposes: {
        './Header': './src/Header.js'
      }, // 暴露给其他应用的模块
      shared: {} // 共享的模块，例如 lodash
    })
  ]
}
