var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: './build/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=react,presets[]=es2015',
      exclude: [nodeModulesPath]
    },
    { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      {test: /\.(png|jpg)$/, loader: 'file-loader'},
    { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }]
  }
};

module.exports = config;
