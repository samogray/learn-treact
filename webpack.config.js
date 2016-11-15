/**
 * Created by Oleksandr on 11.11.2016.
 */
const webpack = require('webpack');

module.exports = {
    entry: './app',
    output: {
        filename: "./dist/bundle.js"
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
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]/*,
    devServer: {
        contentBase: __dirname +'/dist',
        hot: true
    }*/
}
