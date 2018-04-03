var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'src/index'); //__dirname 中的app目录，以此类推
var APP_FILE = path.join(APP_PATH, 'index.js'); //根目录文件index.js地址
var BUILD_PATH = path.join(ROOT_PATH, '/public'); //发布文件所存放的目录


module.exports = {
      // 入口文件
    entry: path.join(__dirname, './src/index/index.js'),
      // 输出配置
    output: {
    // 输出路径
        path: path.join(__dirname, './public'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录 
        historyApiFallback: true, //不跳转
        inline: true //实时刷新 
    },
    module: {
        rules: [
            // 使用vue-loader 加载 .vue 结尾的文件
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
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/index/index.html', //html模板路径
            hash: false,
        }),
        new ExtractTextPlugin('[name].css')
    ]
}