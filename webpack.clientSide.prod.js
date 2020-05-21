const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const TerserPlugin = require('terser-webpack-plugin');

const ClientConfig = merge(baseConfig, {
    mode: 'production',
    entry: {
        client: path.join(__dirname, './src/client/entry.js')
    },
    output: {
        filename: '[name].js',
        path: helpers.root('dist'),
        publicPath: '/'
    },
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "modules": false
                                }
                            ],
                            "@babel/preset-react"
                        ],
                        plugins: [
                            ["import", { libraryName: "antd-mobile", style: "css" }], // `style: true` 会加载 less 文件
                            "@babel/plugin-syntax-dynamic-import",
                            "@loadable/babel-plugin",
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                pxtorem({
                                    rootValue: 37.5,
                                    propWhiteList: [],
                                })
                            ]
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img'
                    }
                }]
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, './src/assets/icon'),
            to: helpers.root('dist/icon')
        }]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ],
    }
})

module.exports = ClientConfig