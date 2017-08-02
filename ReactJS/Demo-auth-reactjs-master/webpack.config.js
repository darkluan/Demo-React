const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './build',
      inline: true,
      port: 8080,
      historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
    module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
            
         }
      ]
   }
}