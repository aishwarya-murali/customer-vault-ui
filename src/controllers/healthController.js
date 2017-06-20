import config from 'config';
import express from 'express';
import { format } from 'url';
import { handleError } from '~/server/errors';

export default express.Router()
  .get('/ping', (req, res) => {
    res.json({ status: 'ok' });
  })

  .get('/health', (req, res) => {
    const pathname = '/api/v1/ping';
    const apiHealthUrl = format({
      ...config.api.uri,
      pathname
    });

    fetch(apiHealthUrl, { method: 'GET' })
      .then((response) => response.status === 200)
      .catch(() => false)
      .then((xapiStatus) => {
        const dependenciesStatus = xapiStatus;
        const response = {
          status: dependenciesStatus ? 'ok' : 'degraded',
          dependencies: [
            {
              name: 'Exchange XAPI',
              code: 'exchange-xapi',
              description: 'The Exchange UI Experience API Dependency',
              status: xapiStatus ? 'ok' : 'error'
            }
          ]
        };

        res.status(dependenciesStatus ? 200 : 503).json(response);
      })
      .catch(handleError(req, res))
    ;
  })
;
