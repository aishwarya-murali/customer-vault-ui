import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import getRoutes from '../App';
import { Router } from 'react-router';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
              <Router history={history}>
                {getRoutes()}
              </Router>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
