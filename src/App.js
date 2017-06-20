import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import AnypointPlatformHome from './components/AnypointPlatform/Home';

import HomeContainer from './containers/Home';

import { Router, Route, hashHistory, IndexRoute} from 'react-router';

export default () => (
          <Route path="/" component={MainPage}>
            <IndexRoute component={AnypointPlatformHome} />
            <Route path="anypointPlatformHome" component={AnypointPlatformHome} />
            <Route path="home" component={HomeContainer}>
      
            </Route>
          </Route>
    );
