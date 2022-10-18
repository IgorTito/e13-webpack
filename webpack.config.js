const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path");
const ENV = process.env.NODE_ENV === "production" ? "production" : "development";
require("custom-env").env()

module.exports = {
    mode: ENV,
    entry: "./src/index.js",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3001,
        hot: process.env.APP_hot,
    },
    output: {
        filename: "main.js"
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
    },
    devtool: "inline-source-map",
};