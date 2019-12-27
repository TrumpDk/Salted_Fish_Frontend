const path = require("path");
const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development',
    plugins: [
       //  new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                baseURL: JSON.stringify('http://localhost:8081')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WriteFilePlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        host: 'localhost',
		stats: 'minimal',
        port: 8082,
        historyApiFallback: true
    }
});

module.exports = webpackDevConfig;