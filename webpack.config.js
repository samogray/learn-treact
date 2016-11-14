/**
 * Created by Oleksandr on 11.11.2016.
 */

module.exports = {
    entry: "./app",
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
                cacheDirectory: true
            }
        }],
        devtool: "source-map"
    }
}
