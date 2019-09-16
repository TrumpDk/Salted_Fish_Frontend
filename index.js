require('./ignore.js')(); // this script will ignore some other files that can't be resolved
require('asset-require-hook')({ // resolve importing assetes files. refer to https://github.com/yangfan0095/react-koa2-ssr/issues/4
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    limit: 10000,
    name: '/assets/[hash].[ext]'
});
require("@babel/register")({
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-export-namespace-from"
    ]
});
require('@babel/polyfill')
require('./server')