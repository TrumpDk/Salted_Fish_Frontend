const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    resolve: {
        extensions: [' ', '.js', '.json'],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name]@[id].css'
        }),
        new CleanWebpackPlugin(),
    ]
};