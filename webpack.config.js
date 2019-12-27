const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // polyfill will convert async to generator
    entry: {
        bundle: ["@babel/polyfill", path.join(__dirname, '/src/index.js')]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public/resource'),
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
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-proposal-export-default-from",  //export v from "xx/xx"
                            "@babel/plugin-proposal-export-namespace-from", //export v as vv from "xx/xx";
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-syntax-dynamic-import"
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
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/client/template.html'),
            filename: path.join(__dirname, '/dist/index.html')
        }),
        new miniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name]@[id].css'
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'src/assets/public/icon'),  //copy file to dist without importing
            to: path.join(__dirname, 'dist/public/icon')
        }])
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20
        }
    }
};