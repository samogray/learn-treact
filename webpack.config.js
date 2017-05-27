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
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 6,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: true
                  }
                ]
              }
            }
          }
        ]
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
