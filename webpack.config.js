const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    watch: true,
    devtool: "inline-source-map",
    entry: {
        index: './src/index.tsx'
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Your amazing app!',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  "style-loader",
                  "css-loader",
                  "less-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
};