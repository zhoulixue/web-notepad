// 使用dll为更改不频繁的代码生成单独的编译结果
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    jquery: ['jquery'],
  },
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'dll/manifest.json')
    })
  ]
}