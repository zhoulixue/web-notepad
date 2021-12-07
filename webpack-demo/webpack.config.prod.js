const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfg = require('./webpack.config.common');

module.exports = merge(commonConfg, {
  output: {
    publicPath: 'http://localhost:8080/',
  },
  mode: 'production',
  plugins: [
    new TerserPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
