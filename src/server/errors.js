import React from 'react';
import NotFoundPage from '~/components/ErrorPage/NotFoundPage';
import ServerErrorPage from '~/components/ErrorPage/ServerErrorPage';
import { prettifyError } from '~/utils/errors';
import logger from './logger';
import renderHTML from './renderHtml';

export function handleError(req, res) {
  return (error) => {
    logger.error('There has been an error: %s', prettifyError(error));
    const component = error.status === 404 ?
      <NotFoundPage /> :
      <ServerErrorPage />;
    const status = error.status || 500;

    return renderHTML(req, res, { status, component });
  };
}
