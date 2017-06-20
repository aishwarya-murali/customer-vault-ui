'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.resolve(__dirname, '../../');
const postCSSConfig = require('@mulesoft/anypoint-styles/postcss.config');
var __CONFIG__ = require('../../config/default.js')

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, '../../src/index.js')
    ],
    output: {
      path: path.join(rootPath, '/dist/'),
      filename: '[name].js',
      publicPath: '/'
  },
  //Via webpack.config.js
  devServer: {
    host: 'localhost',
    port:3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
     // Config for minimal console.log mess.
     assets: false,
     colors: true,
     version: false,
     hash: false,
     timings: false,
     chunks: false,
     chunkModules: false
   }
  },
   resolve: {
      modulesDirectories: ['node_modules'],
      extensions:         ['', '.js', '.jsx']
    },
    externals: {
      config: JSON.stringify(__CONFIG__)
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
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
        'css-loader?localIdentName=[name]__[local]__[hash:base64:5]&camelCase!postcss-loader'
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
