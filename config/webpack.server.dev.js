const path = require("path");
const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
// const LoadablePlugin = require('@loadable/webpack-plugin');
const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development',
    target: 'node',
    entry: {
        server: path.join(__dirname, '../index.js') // ../src/server/entry.js
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/server/resource'),
        publicPath: '/assets/',
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                "targets": {
                                    "node": "current"
                                }
                            }
                        ],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                        "dynamic-import-node",
                        "@loadable/babel-plugin",
                        "@babel/plugin-transform-runtime",
                    ]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img'
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 30,
                        fallback: 'file-loader',// if resources can't be resolved by url-loader then use file-loader instead
                        outputPath: 'font',
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                baseURL: JSON.stringify('http://localhost:8081')
            }
        }),
        // new LoadablePlugin()
    ],
    externals: [nodeExternals()]
});

module.exports = webpackDevConfig;