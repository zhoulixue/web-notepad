const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const toml = require('toml');
const yaml = require('yaml');
const json5 = require('json5');

module.exports = (env) => {
  console.log(env);
  return {
    // entry: './src/index.js',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    // entry: {
    //   index: {
    //     import: './src/index.js',
    //     dependOn: 'shared',
    //   },
    //   another: {
    //     import: './src/another-module.js',
    //     dependOn: 'shared',
    //   },
    //   shared: 'lodash',
    // },
  
    output: {
      filename: 'scripts/[name].[contenthash].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
      assetModuleFilename: 'images/[contenthash][ext]', // 资源文件名
      publicPath: 'http://localhost:8080/',
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
      new TerserPlugin(),
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
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                ],
              ],
            },
          },
        },
      ],
    },
  
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        // chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};
