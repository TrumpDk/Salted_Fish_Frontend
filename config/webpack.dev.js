const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development',
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'), // a string must be converted by stringify
                baseURL: JSON.stringify('http://localhost:8081')
            }
        })
    ]
});

module.exports = webpackDevConfig;