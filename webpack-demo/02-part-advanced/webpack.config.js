// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main2.js',
  // entry: {
  //   main: {
  //     import: ['./src/app.js'],
  //     dependOn: 'lodash',
  //     filename: 'channel1/[name].js'
  //   },
  //   main2: {
  //     import: ['./src/app2.js'],
  //     dependOn: 'lodash',
  //     filename: 'channel2/[name].js'
  //   },
  //   lodash: {
  //     import: 'lodash',
  //     filename: 'common/[name].js'
  //   }
  // },
  // devtool: 'eval', // 默认值
  // devtool: 'source-map',
  // devtool: 'hidden-source-map', // 会生成map但是不会关联
  // devtool: 'inline-source-map', // 不会单独打包map文件
  // devtool: 'eval-source-map',
  // devtool: 'cheap-source-map', // 生成没有列信息的map文件
  // devtool: 'cheap-module-source-map', // 开发环境下推荐使用
  output: {
    publicPath: '/'
  },
  devServer: {
    static: '/',
    compress: true, // Content-Encoding: gzip;
    port: 3000,
    headers: {
      'X-access-token': '123',
    },
    // https: true,
    // http2: true,
    proxy: {
      '/api': 'http://localhost:9000',
    },
    historyApiFallback: true, // 跳转任意路由
    host: '0.0.0.0',
    hot: true, // HMR hot module replace
    liveReload: true, // 自动编译和刷新浏览器
    client: {
      overlay: false, // 出现错误或告警时，在浏览器中显示全屏覆盖
    },
  },
  output: {
    clean: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   title: 'main1',
    //   inject: 'body',
    //   chunks: ['main', 'lodash'],
    //   filename: 'channel1/index.html',
    //   publicPath: 'http://www.a.com'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   title: 'main2',
    //   inject: 'body',
    //   chunks: ['main2', 'lodash'],
    //   filename: 'channel2/index.html',
    //   publicPath: 'http://www.b.com'
    // }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'postcss-loader'
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.json', '.js', '.vue'],
  },
  externalsType: 'script',
  externals: {
    jquery: [
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
      'jQuery',
    ],
  },
  // optimization: {
  //   usedExports: true
  // }
};
