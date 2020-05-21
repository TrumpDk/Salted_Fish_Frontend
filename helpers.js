var path = require('path');
var _root = path.resolve(__dirname);
var root = path.join.bind(path, _root);
exports.root = root;