const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'hyper-spark.js',
    libraryTarget: 'commonjs'
  },
  devtool: 'cheap-source-map',
  plugins: [ new webpack.DefinePlugin({ 'global.GENTLY': false }) ],
  externals: [ nodeExternals(), 'hyper/component', 'hyper/notify', 'hyper/decorate', 'react', 'electron' ],
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
