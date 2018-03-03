// Paths
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public/');
const APP_DIR = path.resolve(__dirname, 'src/client/app/');

// Plugins

module.exports = {
  entry: {
    app: APP_DIR + '/index.jsx'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: BUILD_DIR
  }
};
