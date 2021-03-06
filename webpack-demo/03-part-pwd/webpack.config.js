// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const webpack = require('webpack');
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'mylib.js',
    library: {
      name: 'mylib',
      type: 'umd',
    },
    globalObject: 'globalThis'
  },
  // experiments: {
  //   outputModule: true,
  // },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    // new webpack.ProvidePlugin({ // 全局引入
    //   _: 'lodash'
    // })
  ],
  devServer: {
    // devMiddleware: {
    //   writeToDisk: true, // 启动http服务时，编译代码存储到dist
    // }
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?wrapper=window'
      // },
      // {
      //   test: require.resolve('./src/global.js'),
      //   use: 'exports-loader?type=commonjs&exports=file'
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: [
      //       [
      //         '@babel/preset-env',
      //         {
      //           targets: [
      //             'last 1 version',
      //             '> 1%'
      //           ],
      //           useBuiltIns: 'usage',
      //           corejs: 3
      //         }
      //       ]
      //     ]
      //   }
      // }
    ]
  }
}