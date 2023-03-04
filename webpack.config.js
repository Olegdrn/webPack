const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader, 'style-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].js'
        })
    ]
};
