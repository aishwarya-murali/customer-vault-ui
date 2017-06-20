'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var CompressionPlugin = require("compression-webpack-plugin");
const rootPath = path.resolve(__dirname, '../../');
const postCSSConfig = require('@mulesoft/anypoint-styles/postcss.config');
var __CONFIG__ = require('../../config/default.js')

module.exports = {
    stats: { children: false },
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, '../../src/index.js')
    ],
    output: {
      path: path.join(rootPath, '/dist/'),
      filename: 'securityFabric.[hash].js',
      publicPath: '/'
  },
   resolve: {
      modulesDirectories: ['node_modules'],
      extensions:         ['', '.js', '.jsx']
    },
    externals: {
      config: JSON.stringify(__CONFIG__)
    },
    plugins: [

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        __DEVELOPMENT__: false,
        NODE_ENV:        JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('./css/securityFabric.[hash].css', {
        allChunks: true
    })
/*    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
*/
  ],
    module: {
        noParse: ['config', 'react', 'react-dom', '@mulesoft'],

        loaders: [{
      test:    /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
      include: path.join(rootPath, 'src')
    }, {
      test:    /\.css$/,
      include: path.join(rootPath, 'src'),
      loaders: [
        'style-loader',
        'css-loader?importLoaders=1&sourceMap=true&localIdentName=[name]__[local]__[hash:base64:5]&camelCase!postcss-loader'
      ]
    }, {
      test:    /\.css$/,
      exclude: path.join(rootPath, 'src'),
      loaders: [
        'style-loader',
        ExtractTextPlugin.extract('css-loader?localIdentName=[name]__[local]__[hash:base64:5]&camelCase!postcss-loader')
      ]
    }, {
      test:    /\.json$/,
      loaders: [
        'json-loader'
      ]
    }]
  },
  postcss: postCSSConfig
};
