module.exports = [
    {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    },
    {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
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