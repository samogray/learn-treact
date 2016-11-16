/**
 * Created by Oleksandr on 11.11.2016.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: ['webpack-dev-server/client','webpack/hot/dev-server','./app']
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015","react"],
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/, loader: "style!css"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
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
        contentBase:'./dist',
        hot: true
    }
}
