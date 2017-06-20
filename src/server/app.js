import bodyParser from 'body-parser';
//import config from '../config';
import cookieSession from 'cookie-session';
import express from 'express';
import expressHttpProxy from 'express-http-proxy';
import methodOverride from 'method-override';
import React from 'react';
import { Provider } from 'react-redux';
import { match } from 'react-router';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import { format } from 'url';
import uuid from 'uuid';
//import { requestLoggerMiddleware } from '@mulesoft/logger-helper';
import routes from './App';
//import assetsController from './controllers/assetsController';
import authenticationController from '../controllers/authenticationController';
import healthController from '../controllers/healthController';
//import pagesController from './controllers/pagesController';
import { getProfile } from '../services/authenticationService';
import configureStore from '../store/configureStore';
import { compose } from '../utils/url';
import {
  selectors as commonSelectors,
  actions as commonActions
} from '../domains/common';
import { handleError } from './errors';
import logger from './logger';
import { refreshTokenMiddleware } from './middlewares/refreshTokenMiddleware';
//import renderHTML from './renderHtml';
const config = {};
if (config.newRelic.enabled) {
  process.env.NEW_RELIC_NO_CONFIG_FILE = config.newRelic.noConfigFile;
  process.env.NEW_RELIC_LICENSE_KEY = config.newRelic.licenseKey;
  process.env.NEW_RELIC_APP_NAME = config.newRelic.appName;
  process.env.NEW_RELIC_NAMING_RULES = config.newRelic.rules.map((r) => JSON.stringify(r)).join(',');
  process.env.NEW_RELIC_IGNORING_RULES = config.newRelic.ignoringRules;

  // eslint-disable-next-line global-require
  require('newrelic');
}

const app = express();

if (!config.useCDN) {
  app.use('/assets', express.static(config.assets.path));
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('./dev').setConfig(app);
}

if (config.allowUnauthorizedTLS) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

if (config.proxyApi) {
  app.use('/api', expressHttpProxy(format(config.api.uri), {
    forwardPath: (req) => `/api${req.url}`
  }));
}

if (config.proxyIcons) {
  app.use(config.iconsUrl, express.static('node_modules/@mulesoft/anypoint-icons/lib'));
}

app.use((req, res, next) => {
  // eslint-disable-next-line no-param-reassign
  req.id = uuid.v4();
  next();
});
//app.use(requestLoggerMiddleware(logger));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession(config.session));
app.use(methodOverride('_method'));
app.use(refreshTokenMiddleware);

app.use(assetsController);
app.use(authenticationController);
app.use(healthController);
app.use(pagesController);

app.use((req, res) => {
  const store = configureStore();
  const context = {
    authorization: req.authorization,
    requestId: req.id
  };

  matchRoutes({ location: req.url }).then(({ renderProps, redirectLocation }) => {
    if (redirectLocation) {
      return res.redirect(301, redirectLocation.pathname);
    }

    if (!renderProps) {
      const error = new Error('Page not found.');
      error.status = 404;
      error.cause = 'There are not renderProps as a result of the matchRoute function';
      error.location = req.url;
      throw error;
    }

    return getProfile({ context })
      .catch((err) => {
        if (err.status !== 401) {
          // eslint-disable-next-line no-param-reassign
          err.cause = 'Unauthorized while getting the user Profile';
          throw err;
        }
      })
      .then((profile) => {
        store.dispatch(commonActions.setSession(profile, context));

        return loadOnServer({ ...renderProps, store });
      })
      .then(() => {
        const initialState = store.getState();
        const error = commonSelectors.error(initialState);

        if (error) {
          error.profile = initialState.profile;
          error.cause = 'An error occurred while loading the redux state';
          throw error;
        }

        const component = (
          <Provider store={store}>
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );

        return renderHTML(req, res, {
          component,
          initialState
        });
      });
  })
  .catch(handleError(req, res));
});

function matchRoutes({ location }) {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error);
        return;
      }

      resolve({ redirectLocation, renderProps });
    });
  });
}

app.disable('x-powered-by');

const serverUri = compose(config.uri);

app.listen(serverUri.port, serverUri.hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on: ${serverUri.host} 😸`);
});
