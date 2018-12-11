const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './component/Bubbles.js',
  output: {
    filename: 'bubbles.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      include: /component/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  devtool: 'inline-source-map',
};