const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const webpack = require('webpack');
const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'), // a string must be converted by stringify
                baseURL: JSON.stringify('http://localhost:8082')
            }
        })
    ]
});

module.exports = webpackDevConfig;