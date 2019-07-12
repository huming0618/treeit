var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname, '../');
var APP_PATH = path.join(ROOT_PATH, 'src'); 
var APP_FILE = path.join(APP_PATH, 'index.js'); 
var BUILD_PATH = path.join(ROOT_PATH, '/dist'); 


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: APP_FILE,
    output: {
        path: BUILD_PATH,
        filename: 'index.js'
    },
    devServer: {
        index: "test.html",
        contentBase: BUILD_PATH, 
        historyApiFallback: true, 
        inline: true 
    },
    module: {
        rules: require('./rules')
    },
    resolve: {
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') 
            }
        }),
        new CopyWebpackPlugin([
            { from: path.join(APP_PATH, 'test.html'), to: 'test.html' },
            { from: path.join(APP_PATH, 'chrome/manifest.json'), to: 'manifest.json' }
        ])
    ]
}