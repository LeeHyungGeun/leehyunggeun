const webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/server.ts',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    node: {
        fs: 'empty'
    }
};