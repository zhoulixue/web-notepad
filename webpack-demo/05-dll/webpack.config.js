const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll/manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/jquery.js'),
      publicPath: './'
    })
  ]
}