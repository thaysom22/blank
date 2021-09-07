const path = require("path");


module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    devtool: "source-map",  // enables source mapping
    devServer: {
        static: './dist/assets',
        allowedHosts: ["3000-olive-wasp-mlwdq9nf.ws-us15.gitpod.io"],
        port: 3000,
    },
};