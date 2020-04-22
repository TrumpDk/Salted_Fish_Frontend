const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const ServerConfig = merge(baseConfig, {
    mode: 'production',
    target: 'node',
    entry: {
        server: path.join(__dirname, './src/server/entry.js')
    },
    externals: ["@loadable/component", new nodeExternals({ whitelist: [/\.(sa|sc|c)ss$/] })],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/server'),
        publicPath: '/assets/',
        libraryTarget: 'commonjs2'
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
                        ["import", { libraryName: "antd-mobile", style: "css" }], // `style: true` 会加载 less 文件
                        "@babel/plugin-syntax-dynamic-import",
                        "@loadable/babel-plugin",
                        "@babel/plugin-transform-runtime"
                    ]
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
    }
})

module.exports = ServerConfig