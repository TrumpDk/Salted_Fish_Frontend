const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development'
});

module.exports = webpackDevConfig;