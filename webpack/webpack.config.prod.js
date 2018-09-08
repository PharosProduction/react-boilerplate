const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config.js');

module.exports = merge.smart(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      warningsFilter: (src) => true
    }),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
      }
    })
  ]
});
