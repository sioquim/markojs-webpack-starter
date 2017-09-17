module.exports = {
    entry: "./src/client.js",
    output: {
        path: __dirname,
        filename: "public/static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko']
    },
    module: {
        loaders: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            }
        ]
    }
}