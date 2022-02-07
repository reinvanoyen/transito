const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'transito.bundle.js',
        library: {
            name: 'transito',
            type: 'umd'
        }
    }
};