const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

exports.default = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      remotes: {
        nav: 'nav@http://localhost:3000/remoteEntry.js'
      },
      exposes: {
        './HomeList': './src/HomeList.js'
      },
      shared: {}
    })
  ]
}
