import config from '../../config/default';
import { format } from 'url';
import ReactDOM from 'react-dom/server';
//import DocumentMeta from 'react-document-meta';

let version;
if (process.env.NODE_ENV !== 'development') {
  // eslint-disable-next-line global-require
  version = undefined; //require('../../VERSION.json');
}

export default function renderHTML(req, res, { component, initialState = {}, status = 200 }) {
  const componentHTML = ReactDOM.renderToString(component);
  const loadScripts = status === 200;
  const rodoMode = new Buffer(config.app.encMode, 'base64').toString('ascii');
  const html = buildHTML({
    componentHTML,
    initialState,
    loadScripts,
    rodoMode: req.query[rodoMode]
  });

  res.status(status).send(html);
}

function buildHTML({ componentHTML, initialState, loadScripts, rodoMode }) {
  const assets = getAssets();
  const buildVersion = version ? `<!-- 📼 ${version.tag} - 📅 ${version.date} -->` : '';
  const stylesUrl = format({ ...config.assets.uri, pathname: `${config.contextPath}${assets.css}` });
  const styles = assets.css ? `<link rel="stylesheet" href="${stylesUrl}">` : '';
  const rodoStyle = rodoMode ? '<style>* { font-family: "Comic Sans MS", "Comic Sans", cursive !important }</style>' : '';
  const vendorScripts = config.vendor.map((vendor) =>
    `<script src="${vendor}"></script>`
  ).join('');
  const jsUrl = format({ ...config.assets.uri, pathname: `${config.contextPath}${assets.js}` });
  const state = new Buffer(JSON.stringify(initialState)).toString('base64');
  const meta = {};//DocumentMeta.renderAsHTML();

  const scripts = `
    <script type="application/javascript">
    window.__CONFIG__ = ${JSON.stringify(config.client)};
    window.__INITIAL_STATE__ = ${JSON.stringify(state)};
    </script>
    ${vendorScripts}
    <script src="${config.navbar.uri}"></script>
    <script src="${jsUrl}"></script>
  `;

  return `
    ${buildVersion}
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${meta}
      <link rel="icon" type="image/x-icon" href="${config.app.favicon}">
      ${styles}
      ${rodoStyle}
    </head>
    <body class="anypoint-styles 😎">
      <div id="react-view"><div>${componentHTML}</div></div>
      ${loadScripts ? scripts : ''}
    </body>
    </html>
  `.replace(/>\s+</g, '><').trim();
}

function getAssets() {
  let assets;

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    assets = require('./dev').assets;
  } else {
    // eslint-disable-next-line global-require
    assets = require('../etc/assets.json').main;
  }

  return assets;
}
