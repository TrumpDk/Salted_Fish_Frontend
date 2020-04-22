const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ClientConfig = merge(baseConfig, {
    mode: 'production',
    entry: {
        client: path.join(__dirname, './src/client/entry.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/client'),
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
            to: path.join(__dirname, './dist/client/icon')
        }])
    ]
})

module.exports = ClientConfig