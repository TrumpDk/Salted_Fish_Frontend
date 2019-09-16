const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread", //解析对象的扩展运算符（ES2018）
                            "@babel/plugin-proposal-export-default-from",  //解析额外的export语法:export v from "xx/xx"
                            "@babel/plugin-proposal-export-namespace-from", //解析额外的export语法:export v as vv from "xx/xx";
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                    }
                }

            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']  //处理顺序:sass-loader->css-loader->style-loader
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 30,         //30KB 以下的文件采用 url-loader
                        fallback: 'file-loader',  //否则采用 file-loader，默认值就是 file-loader
                        outputPath: 'fonts',      //字体输出路径
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/template.html',  //html模板
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: './src/assets/public',  // 将此目录下的文件
            to:'./public'                 // 输出到此目录，相对于output.path目录
        }])
    ],
    devServer: {
        hot: true,
        contentBase: './dist',     //将dist目录下的文件，作为额外可访问文件
        host: 'localhost',
        port: 3005,
        https: false,
        open: true,
        historyApiFallback: true,  // when using BrowserRouter "historyApiFallback" should be true.For more details please refer to 
                                   //https://stackoverflow.com/questions/45263511/getting-404-error-in-react-router-dom
    }
};