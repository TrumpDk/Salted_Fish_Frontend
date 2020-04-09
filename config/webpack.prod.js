const path = require("path");
const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const webpackProdConfig = merge(webpackBaseConfig, {
    mode: 'production',
    // polyfill will convert async to generator
    entry: {
        client: path.join(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name]@[hash].js',
        path: path.resolve(__dirname, '../dist/client/resource'),
        publicPath: '/assets/'
    },
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
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            "@babel/plugin-syntax-dynamic-import",
                            "@loadable/babel-plugin",
                            "@babel/plugin-transform-runtime",
                        ]
                    }
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
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../src/assets/public/icon'),  //copy file to dist without importing
            to: path.join(__dirname, '../dist/public/icon')
        }]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                baseURL: JSON.stringify('http://localhost:8081')
            }
        }),
        new LoadablePlugin(),
    ],
    optimization: {
        minimizer: [
            new optimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 20
        }
    },
    devtool: 'cheap-source-map',
});

module.exports = webpackProdConfig;