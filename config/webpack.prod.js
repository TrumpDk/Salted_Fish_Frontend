const merge = require('webpack-merge');
const webpackBaseConfig = require('../webpack.config');
const webpackProdConfig = merge(webpackBaseConfig, {
    mode: 'production'
});

module.exports = webpackProdConfig;