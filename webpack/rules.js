module.exports = [
    {
        test: /\.s(c|a)ss$/,
        use: [
            { loader: "vue-style-loader" },
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                    fiber: require('fibers')
                }
            }
        ]
    },
    {
        test: /\.vue$/,
        exclude: /^node_modules$/,
        use: 'vue-loader'
    }, {
        test: /\.json$/,
        exclude: /^node_modules$/,
        use: "json"
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