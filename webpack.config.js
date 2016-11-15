/**
 * Created by Oleksandr on 11.11.2016.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app',
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
                    presets: ["es2015","react"]
                   // cacheDirectory: true
                }
            },
            {
                test: /\.css$/, loader: "style!css"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
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
