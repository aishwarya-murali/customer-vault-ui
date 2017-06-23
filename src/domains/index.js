import { combineReducers }              from 'redux';
import { reducer as reduxAsyncReducer } from 'redux-connect';
import { routerReducer as routing } from 'react-router-redux';
import { routerReducer }                from 'react-router-redux';

import {
  actions   as commonActions,
  reducers  as commonReducers
} from './common';

import {
  actions as snActions,
  reducers as snReducers
} from './securityNS';

export const actions = {
  commonActions: commonActions,
  snActions: snActions
};

export const reducers = combineReducers({
  routing:            routerReducer,
  common:             commonReducers,
  securityNSVals:     snReducers,
});
