var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

// Webpack config
var config = {
  entry: {
    app: APP_DIR + '/index.jsx'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};


module.exports = config;
