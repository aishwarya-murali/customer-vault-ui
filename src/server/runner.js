/*
  eslint
    import/no-commonjs: 0
*/

global.fetch = require('node-fetch');

global.Response = fetch.Response;

require('css-modules-require-hook')({
  generateScopedName: '[hash:base64:5]',
  camelCase: true
});
require('./app');
