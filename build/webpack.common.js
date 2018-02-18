const path = require('path');
const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/app.js')
    },

    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(png|jpg|gif)$/, use: [{loader: 'file-loader', options: {outputPath: 'img/'}}] }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {root: path.resolve(__dirname, '..')}),
        new Webpack.optimize.CommonsChunkPlugin({name: 'common'})
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
}