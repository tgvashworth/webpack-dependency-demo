var path = require('path');

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
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'out.js'
  }
};
