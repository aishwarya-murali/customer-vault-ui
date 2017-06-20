import browserHistory       from 'react-router/lib/browserHistory';
import { routerMiddleware } from 'react-router-redux';
import { reducers }         from '../domains';
//import { dispatchError }    from './utils/errors';
//import { isClient }         from '~/utils/window';
import thunk from "redux-thunk";
import DevTools from '../containers/DevTools';

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

// export const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === 'function') {
//     const promise = action(dispatch, getState);
//
//     if (promise.catch) {
//     //  promise.catch((error) => dispatchError({ dispatch, error }));
//     }
//
//     return promise;
//   }
//
//   return next(action);
// };

export default function configureStore(initialState) {
  console.log("initialState from configure store",initialState);
  const middleware = applyMiddleware(routerMiddleware(browserHistory), thunk);
  const enhancers  = getEnhancers(middleware);
  const store      = createStore(reducers, initialState, enhancers);

  return store;
}

function getEnhancers(middleware) {
  // eslint-disable-next-line no-underscore-dangle
  return compose(middleware, DevTools.instrument());
}
