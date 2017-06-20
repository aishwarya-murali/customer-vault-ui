import React from 'react';
import { render } from 'react-dom';
import './index.css';
//import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import init from './server/store';

//const initialState = {};
const { store } = init();
//const store = configureStore(initialState);
console.log("store",store.getState());
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
