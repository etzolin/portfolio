const merge = require('webpack-merge');
const path = require('path');

// Paths
const BASE_PATH = path.resolve(__dirname);
const PUBLIC_PATH = path.resolve(BASE_PATH, 'public');
const SOURCE_PATH = path.resolve(BASE_PATH, 'src');
const ASSET_PATH = '/assets';

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Common configuration
const common = merge([{
  entry: {
    app: SOURCE_PATH + '/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: SOURCE_PATH,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        include: SOURCE_PATH,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SOURCE_PATH + '/index.html'
    }),
    new CleanWebpackPlugin([PUBLIC_PATH]),
    new ExtractTextPlugin({
      filename: 'style.[contenthash].css'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: PUBLIC_PATH,
    publicPath: ''
  }
}]);

// Production configuration
const production = merge([{
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}]);

// Development configuration
const development = merge([{
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PUBLIC_PATH
  }
}]);

module.exports = mode => {
  if(mode === "production") {
    return merge(common, production, {mode});
  }

  return merge(common, development, {mode});
};
