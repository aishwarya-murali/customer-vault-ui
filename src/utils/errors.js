import React              from 'react';
import ServerErrorPage    from '~/components/ErrorPage/ServerErrorPage';
import NotFoundPage       from '~/components/ErrorPage/NotFoundPage';
import * as commonActions from '~/domains/common/actions';
import { isClient }       from '~/utils/window';

export function errorWrapper(component) {
  // eslint-disable-next-line react/prop-types
  return ({ error, ...args }) => {
    if (error) {
      return error.status === 404 ? <NotFoundPage /> : <ServerErrorPage />;
    }

    if ({}.isPrototypeOf.call(React.Component, component)) {
      const ReactClass = component;
      return <ReactClass {...args} />;
    }
    return component({ ...args });
  };
}

export function prettifyError(errorObj) {
  return JSON.stringify(errorObj, (errorKey, value) => {
    if (value instanceof Error) {
      const error = {};

      Object.getOwnPropertyNames(value).forEach((key) => {
        error[key] = value[key];
      });

      return error;
    }

    return value;
  });
}

export function dispatchError({ dispatch, error }) {
  console.error(error);

  if (isClient()) {
    const alert = {
      type:    'error',
      message: error.message
    };

    return dispatch(commonActions.setAlert(alert));
  }

  return dispatch(commonActions.setError(error));
}
