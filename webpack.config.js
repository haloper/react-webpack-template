var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /jquery\.js$/, loader: 'expose?jQuery!expose?$' },
            { test: /underscore\.js$/, loader: 'expose?_' }            
        ],
        noParse: [
            /[\/\\]node_modules[\/\\]react[\/\\]dist[\/\\]react\.js$/
        ]
    },
    externals: {
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []
}