/**
 * Created by Oleksandr on 11.11.2016.
 */
const webpack = require('webpack');

const  config = {
    context: __dirname + "./app",
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}

module.exports = {
    // configuration
};