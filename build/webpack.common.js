'use strict';

const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const semver = require('semver');
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

// NOTE: why is v14.0.0? seeing: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#promises-api
const LOWEST_NODE_VERSION = '14.0.0';

(function checkNodeVersion() {
  const curNodeVersion = process.version;

  if (semver.lt(curNodeVersion, LOWEST_NODE_VERSION)) {
    console.error(
      `Oops! we need the node.js version greater than or equal to v${LOWEST_NODE_VERSION}, however now that is v${curNodeVersion}, please upgrade node.js version!`
    );
    process.exit(0);
  }
})();

const { genMultiEntryAndPlugin } = require('./utils');

module.exports = {
  entry: genMultiEntryAndPlugin().entry,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), ...genMultiEntryAndPlugin().plugins],
};
