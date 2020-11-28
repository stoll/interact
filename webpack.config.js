let path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-override.less'), 'utf8'));

module.exports = {
    mode: "development",
    entry: "./src/app.jsx", // entry point - source file
    output: {
        path: path.resolve(__dirname, './public'),     // path to output directory - public folder
        publicPath: '/public/',
        filename: "bundle.js"       // name of the created file
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // determine the file type
                exclude: /(node_modules)/,  // exclude the node_modules folder from processing
                loader: "babel-loader",   // define the loader
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        ["import",
                            {
                                libraryName: "antd",
                                style: true,   // or 'css'
                            }
                        ]]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: themeVariables,
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    }
}
