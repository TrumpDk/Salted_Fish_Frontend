const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const webpackProdConfig = merge(webpackBaseConfig, {
    mode: 'production',
    optimization: {
        minimizer:[
            new optimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions:  {discardComments: {removeAll: true}},
                canPrint: true
            })
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                baseURL: JSON.stringify('http://localhost:8081')
            }
        })
    ],
    devtool: 'cheap-source-map',
});

module.exports = webpackProdConfig;