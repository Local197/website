const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

const html = new HtmlWebpackPlugin({
  title: 'UBC Local 197',
  filename: 'index.html',
  template: 'index.ejs',
  favicon: 'assets/favicon.ico'
});

const sourceFolder = path.resolve(__dirname, 'src');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true
    }),
    extractSass,
    html
  ],


  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              context: sourceFolder
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [sourceFolder]
            }
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]',
              context: sourceFolder
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false}
              ]
            }
          }
        ],
        exclude: path.resolve(__dirname, 'src/assets/inline')
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'raw-loader'
        }, {
          loader: 'svgo-loader',
          options: {
            plugins: [
              {removeTitle: true},
              {convertColors: {shorthex: false}},
              {convertPathData: false},
              {cleanupIDs: false},
              {mergePaths: false}
            ]
          }
        }],
        include: path.resolve(__dirname, 'src/assets/inline')
      }
    ],
  },
};
