const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

exports.default = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'search',
      filename: 'remoteEntry.js',
      remotes: {
        nav: 'nav@http://localhost:3000/remoteEntry.js',
        home: 'home@http://localhost:3001/remoteEntry.js'
      }
    })
  ]
}
