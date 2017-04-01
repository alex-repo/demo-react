module.exports = {
    context: __dirname,
    entry: './src/main/js/app.js',
    output: {
        path: __dirname,
        filename: 'src/main/resources/static/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2016', 'stage-1']
                }
            }
        ]
    }
};