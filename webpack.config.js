const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:'./src/js/app.js',
    output: {
        path:__dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        port: '5000'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ],
                
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}