let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    "entry": ["babel-polyfill", "./app.js"],
    "output": {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js'
    },
    "module": {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    "plugins": [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
