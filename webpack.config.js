const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',     //入口文件
    output: {                   //出口配置
        filename: 'bundle.js', //出口文件名
        path: path.resolve(__dirname, 'dist')  //出口文件路径
    },
    module: {
        rules: [{
            test: /\.js$/,    //使用正则匹配所有需要使用babel-loader的文件
            use: {
                loader: "babel-loader",  //指明要使用的loader
                options: {               //传入loader的参数
                    presets: [           //用于解析一组语法特性
                        [
                            "@babel/preset-env",   //包含当前所有 ECMAScript 标准里的最新特性
                            {
                                "targets": {   //指定需要兼容的浏览器类型和版本
                                    "browsers": [
                                        "> 1%",     //支持市场份额超过1％的浏览器。
                                        "ie >= 9"   //支持IE9以上的版本
                                    ]
                                }
                            }
                        ],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-object-rest-spread", //解析对象的扩展运算符（ES2018）
                        "@babel/plugin-proposal-export-default-from",  //解析额外的export语法:export v from "xx/xx"
                        "@babel/plugin-proposal-export-namespace-from", //解析额外的export语法:export v as vv from "xx/xx";
                        "@babel/plugin-proposal-class-properties",   //解析class中的静态属性
                        "@babel/plugin-syntax-dynamic-import"         //解析import方法
                    ]
                }
            }

        }]
    },      //module.rules loader
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/template.html',  //html模板
        }),
        new webpack.HotModuleReplacementPlugin()
    ],    //插件
    devServer: {
        hot: true,                 //开启模块热替换
        contentBase: './dist',     //将dist目录下的文件，作为额外可访问文件
        host: 'localhost',           //DevServer 服务监听的地址，默认是localhost。当需要同个局域网可访问你的服务时，可设成0.0.0.0
        port: 3001,                //DevServer 服务监听的端口，默认8080
        https: false,              //是否使用HTTPS服务
        open: true                 //自动打开网页，地址是host:port
    }
};