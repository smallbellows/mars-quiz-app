var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/scripts/main.jsx'
    },
    output: {
        filename: './build/main.js',
        // publicPath: '/build/'
    },
    devtool: '#source-map',
    devServer: {
      watch:true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      watchOptions: {
            aggregateTimeout: 300,
            poll: true
      }
    },
    module: {
         loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
              test: /\.(png|jpg|gif)$/,
              loader: "file-loader?name=img/img-[hash].[ext]" 
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
