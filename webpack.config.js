var path = require('path');
var webpack = require('webpack');

module.exports = {

  //fastest rebuild and build speed
  devtool: 'eval',
  entry: [
    //for hot style updates
    'webpack/hot/dev-server',
    //refreshes the browser when it can't hot update
    'webpack-dev-server/client?http://localhost:8080',
    //our entry point
    './app/src/ClientApp.jsx'
  ],
  output: {
    path: path.join(__dirname, 'app', 'public', 'build'),
    filename: 'bundle.js',
    publicPath: './build/' //the server will listen in on this path and then proxy Webpack
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: '/node_modules'
      },
      //This converts our .css into JS
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      {test: /\.(png|jpg)$/, loader: 'file-loader'}
    ]
  },
  //Since we're running Webpack from our server, need to manually add the
  //Hot Replacement plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};