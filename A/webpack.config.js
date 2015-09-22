var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@demo\/)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'out.js'
  }
};
