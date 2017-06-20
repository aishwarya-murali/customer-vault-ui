const path          = require('path');
const postCSSConfig = require('@mulesoft/anypoint-styles/postcss.config');

const rootPath      = path.join(__dirname, '../../');
const srcPath       = path.resolve(__dirname, '../../src');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    root:       [__dirname, path.join(__dirname, 'src'), path.join(__dirname, 'test')],
    extensions: ['', '.js', '.jsx'],
    alias:      {
      // required for enzyme to work properly
      sinon:  'sinon/pkg/sinon',
      config: path.join(__dirname, '../../config', process.env.NODE_ENV)
    },
    fallback:   path.join(rootPath, 'node_modules')
  },

  module: {
    // don't run babel-loader through the sinon module
    noParse: [
      /node_modules\/sinon\//
    ],
    preLoaders: [
      {
        test:    /\.js$/,
        loader:  'babel',
        include: srcPath
      },
      // transpile and instrument only testing sources with isparta
      {
        test:    /\.js/,
        loader:  'isparta',
        include: srcPath,
        exclude: /\.spec\.js$/
      }
    ],
    // run babel loader for our tests
    loaders: [
      {
        test:    /\.js/,
        loaders: ['babel'],
        include: srcPath
      }, {
        test:    /\.css?$/,
        loaders: [
          'style-loader',
          'css-loader?localIdentName=[local]&camelCase!postcss-loader'
        ]
      }, {
        test:    /\.json/,
        loader:  'json',
        include: rootPath
      }
    ]
  },

  isparta: {
    embedSource: true,
    noAutoWrap:  true
  },

  // required for enzyme to work properly
  externals: {
    cheerio:                          'window',
    'react/addons':                   true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext':         'window',
    'text-encoding':                  'window'
  },

  postcss: postCSSConfig
};
