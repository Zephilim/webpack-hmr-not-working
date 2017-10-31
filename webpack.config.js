const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        // app: './src/index.js'                    // (Without HMR)
        app: [                                      // Use this format to enable HMR
            './src/index.js',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ]
    },
    devtool: 'inline-source-map',                   // [DEV] Resolves runtime errors to source files
    devServer: {                                    // [DEV] forces browser refresh on file changes
        contentBase: './dist',
        hot: true                                   // [DEV] enables hot module replacement (hmr)
    },
    plugins: [
        new CleanWebpackPlugin('dist'),             // cleans dist folder
        new HtmlWebpackPlugin({                     // generates our dist/index.html
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),           // [DEV] see which dependencies are being patched
        new webpack.HotModuleReplacementPlugin()    // [DEV]
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

};
