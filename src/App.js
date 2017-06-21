import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import AnypointPlatformHome from './components/AnypointPlatform/Home';

import SecurityFabricHomeContainer from './containers/Home';

import SecurityNS from './components/Home/SecurityNS';
import {SecurityNSContainer, SecurityNSCreateContainer} from './containers/SecurityNS';

import { Router, Route, hashHistory, IndexRoute} from 'react-router';

export default () => (
          <Route path="/" component={MainPage}>
            <IndexRoute component={AnypointPlatformHome} />
            <Route path="anypointPlatformHome" component={AnypointPlatformHome} />
            <Route path="home" component={SecurityFabricHomeContainer}>
              <IndexRoute component={SecurityNSContainer} />
              <Route path="securityNamespace" component={SecurityNS} >
                <IndexRoute component={SecurityNSContainer} />
                <Route path="create" component={SecurityNSCreateContainer} />
              </Route>
            </Route>
          </Route>
    );
