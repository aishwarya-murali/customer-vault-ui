import React from 'react';
import { Provider } from 'react-redux';
import { match } from 'react-router';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import { getProfile } from '../services/authenticationService';
import configureStore from '../store/configureStore';
import { validateEntitlement } from '../utils/profile';
import {
  selectors as commonSelectors,
  actions as commonActions
} from '../domains/common';

export default function init() {

  const store = configureStore();
  console.log("Init state called",store);
  const profile =  getProfile();
  var state = {};
  var context = {};
  store.dispatch(commonActions.setSession(profile, context));
  state = store.getState();
  return { store };

}
