const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module:
    {
        rules: [
            {
                test: /\.(mp[3|4])$/i,
                loader:
                    'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
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
                    }]
            },
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css'
            }
        )
    ]
};
