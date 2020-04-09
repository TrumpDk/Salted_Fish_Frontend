// require('./ignore.js')(); // this script will ignore some other files that can't be resolved
// require('asset-require-hook')({ // resolve importing assetes files. refer to https://github.com/yangfan0095/react-koa2-ssr/issues/4
//     extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
//     limit: 10000,
//     name: '/assets/[hash].[ext]'
// });
// require("@babel/register")({
//     presets: [
//             "@babel/preset-env",
//     ],
//     plugins: [
//          // "@loadable/babel-plugin",
//          "@babel/plugin-proposal-class-properties",
//          //"@babel/plugin-transform-runtime",
//         // "dynamic-import-node",
//     ]
// });
require('css-modules-require-hook')({
    extensions: ['.css'],
    generateScopedName: '[name]__[local]-[hash:base64:8]',
});
require('./server')