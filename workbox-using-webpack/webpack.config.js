const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

const DIST = path.join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './js/index.js',
  output: {
    filename: 'index.[chunkhash:5].js',
    path: DIST,
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
        use: [ 'file-loader' ]
    }]
  },
  plugins: [
    new CleanPlugin([DIST]),
    new HtmlPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:5].css',
    }),
    /**
     * Workbox Webpack Plugin
     */
    new workboxPlugin.GenerateSW({
      swDest: 'build.sw.js',
      // workbox-sw.js 部署本地服务器
      importWorkboxFrom: 'local',
      // （预加载）忽略某些文件
      exclude: [
        /index\.html$/,
      ],
      // 动态更新缓存
      runtimeCaching: [{
        urlPattern: /index\.html/,
        handler: 'networkFirst',
      }, {
        urlPattern: /\.(js|css|png|jpg|gif)/,
        handler: 'staleWhileRevalidate',
      }]
    }),
  ]
};
