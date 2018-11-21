var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'src/index'); 
var APP_FILE = path.join(APP_PATH, 'index.js'); 
var BUILD_PATH = path.join(ROOT_PATH, '/dist'); 


module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: "./dist", 
        historyApiFallback: true, 
        inline: true 
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /^node_modules$/,
                use: 'vue-loader'
            }, {
                test: /\.json$/,
                exclude: /^node_modules$/,
                use: "json"
            }, {
                test: /\.css$/,
                exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
            }, {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                use: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.js$/,
                exclude: /^node_modules$/,
                use: 'babel-loader'
            }
        ]
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
        // new HtmlWebpackPlugin({ 
        //     filename: './index.html',
        //     template: './src/index/index.html',
        //     hash: false,
        // }),
        new CopyWebpackPlugin([
            { from: './src/background.js', to: 'background.js' },
            { from: './src/style/treeit.css', to: 'treeit.css' },
            { from: './chrome/manifest.json', to: 'manifest.json' }
        ]),
        new ExtractTextPlugin('[name].css')
    ]
}