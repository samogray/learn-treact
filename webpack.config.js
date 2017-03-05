/**
 * Created by Oleksandr on 11.11.2016.
 */
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const cssnano = require('cssnano');
const localIdentName = '[local]_[hash:base64:3]'

module.exports = {
  entry: './app',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          cacheDirectory: true
        }
      }, {
        test: /\.css$/, loader: "style!css"
      }, {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true,
              localIdentName
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }]
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?name=images/[name].[ext]?[hash]'
      }, {
        test: /\.(svg)/,
        loader: 'file?name=images/[name].[ext]?[hash]'
      }, {
        test: /\.font$/,
        loader: 'style!css!fontgen?fileName=fonts/[fontname].[ext]?[hash]'
      }, {
        test: /\.(eot|ttf|woff|woff2)/,
        loader: 'file?name=fonts/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
