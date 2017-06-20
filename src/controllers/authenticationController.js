import config from 'config';
import express from 'express';
import { handleError } from '~/server/errors';
import * as authenticationService from '~/services/authenticationService';
import { getRedirectUrl } from '~/utils/url';

export default express.Router()
  .get('/callback', (req, res) => {
    const redirectUrl = getRedirectUrl(req.query.state);

    authenticationService.exchangeToken({
      code: req.query.code,
      clientId: config.app.clientId,
      clientSecret: config.app.clientSecret
    })
    .then((response) => {
      // eslint-disable-next-line no-param-reassign
      req.session = response;
      res.writeHead(302, {
        Location: redirectUrl
      });
      res.end();
    })
    .catch(handleError(res));
  })

  .get('/login', (req, res) => {
    const state = req.headers.referer || '';
    const loginUrl = authenticationService.getLoginUrl({
      state,
      clientId: config.app.clientId
    });

    res.writeHead(302, {
      Location: loginUrl
    });
    res.end();
  })

  .get('/logout', (req, res) => {
    const logoutUrl = authenticationService.getLogoutUrl();

    // eslint-disable-next-line no-param-reassign
    req.session = null;
    res.writeHead(302, {
      Location: logoutUrl
    });
    res.end();
  })
;
