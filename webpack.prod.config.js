var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/client.js",
    output: {
        path: __dirname + "/public",
        filename: "static/bundle.js"
    },
    plugins: [
      new CopyWebpackPlugin([
        { 
            from: './src/index.html'
        }
      ]),
    ],
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