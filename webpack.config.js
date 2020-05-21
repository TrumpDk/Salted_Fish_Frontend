const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const webpackBaseConfig = {
    plugins: [
        new LoadablePlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
    ]
}

module.exports = webpackBaseConfig