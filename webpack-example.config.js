const path = require('path');

module.exports = {
    target: 'web',
    entry: './example/index.js',
    output: {
        path: path.resolve(__dirname, 'example/build'),
        filename: 'index.js'
    },
};