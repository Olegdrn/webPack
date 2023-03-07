const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(mp[3|4])$/i,
                use: [
                    'file-loader'
                ],
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(png|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.c[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
}