const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
      ],
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader'
      ]
    },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file-loader' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
  ]}
};
