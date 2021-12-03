const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const toml = require('toml');
const yaml = require('yaml');
const json5 = require('json5');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bound.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'images/[contenthash][ext]', // 资源文件名
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    }),
  ],
  devServer: {
    static: './dist',
  },
  /**
   * asset/resource 发送一个单独的文件并导出url
   * asset/inline 导出资源的Data URL
   * asset/source 导出资源源代码
   * asset 在导出Data URL 和发送单独的文件之间自动进行选择
   */
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.png$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 默认 8k
          },
        },
      },
      // {
      //   test: /\.(css|scss)$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader',
      },
      {
        test: /\.xml$/,
        use: 'xml-loader',
      },
      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
