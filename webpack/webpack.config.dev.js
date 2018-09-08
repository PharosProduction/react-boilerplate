const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const envFile = require('node-env-file')

const config = require('./webpack.config.js')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || '3000'
process.env.NODE_ENV = 'development'

try {
  envFile(path.join(__dirname, `../config/${process.env.NODE_ENV}.env`));
} catch (e) {
  console.log(e);
}

module.exports = merge.smart(config, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    host: host,
    port: port,
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true,
    https: false,
    noInfo: true,
    hot: false,
    proxy: {
      "/api/*": "http://localhost:4000"
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
      }
    })
  ]
})
