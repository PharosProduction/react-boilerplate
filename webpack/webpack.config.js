const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, '../src', 'index.js')
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images/',
          name: '[name].[ext]?[hash:10]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.join(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts/',
          name: '[name].[ext]?[hash:10]'
        }
      },
      {
        test: /\.(css|scss|sass)$/i,
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, '../node_modules')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, '../node_modules')
        ],
        loader: 'babel-loader'
      }
    ]
  }
};
