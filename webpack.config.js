const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');


module.exports = {
    mode: "development",
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3001,
        hot: true,
    },
    output: {
        filename: 'main.js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        }
                    }, "css-loader"],
                test: /\.css$/
            }
        ]
    }
};