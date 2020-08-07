const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const helpers = require('./helpers');

const webpackBaseConfig = {
    plugins: [
        new LoadablePlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, './src/assets/icon'),
                to: helpers.root('dist/icon')
            },
            {
                from: path.join(__dirname, './src/assets/js'),
                to: helpers.root('dist')
            }
        ]),
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
    ]
}

module.exports = webpackBaseConfig