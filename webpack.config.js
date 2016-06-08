var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/scripts/main.jsx'
    },
    output: {
        filename: 'main.js',
        publicPath: '/build/',
        path: path.join(__dirname, 'build/')
    },
    devtool: '#source-map',
    devServer: {
      watch:true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      compress: true,
      watchOptions: {
            aggregateTimeout: 300,
            poll: 2000
      },
      historyApiFallback: true
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
              test: /\.(png|jpg|gif|svg)$/,
              loader: "file-loader?name=img/img-[name].[ext]"
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
