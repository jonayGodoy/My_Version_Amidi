var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: ["./src/index.js"],
    output: {
        path:  "./amidi/public/build",
        filename: "index.min.js"
    },
    module: {
    loaders: [
        {
            test: /(\.js|.jsx)$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-2', 'react']
            }
        }
    ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
