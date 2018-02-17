const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Developing',
            template: './src/index.html'
        }),
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
});