const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]-[local]-[hash:base64:5]',
                camelCase: true,
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ],
};
