const path = require('path');

module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'transito.bundle.js',
        library: 'transito'
    },
};