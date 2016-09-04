/*global __dirname*/
var path = require('path')

var PATHS = {
  source: path.join(__dirname, 'src', 'js'),
  build: path.join(__dirname, 'public')
}

module.exports = {
  entry: path.join(PATHS.source, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: PATHS.build
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory',
        include: PATHS.source,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
