import config from 'config';
import { refreshToken } from '~/services/authenticationService';

export const refreshTokenMiddleware = (req, res, next) => {
  if (req.session && req.session.refreshToken) {
    refreshToken({
      token: req.session.refreshToken,
      clientId: config.app.clientId,
      clientSecret: config.app.clientSecret
    })
    .then((session) => {
      // eslint-disable-next-line no-param-reassign
      req.authorization = `${session.tokenType} ${session.accessToken}`;

      next();
    })
    .catch(() => next());
  } else {
    next();
  }
};
