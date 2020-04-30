const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackBaseConfig = {
    plugins: [
        new LoadablePlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ]
}

module.exports = webpackBaseConfig