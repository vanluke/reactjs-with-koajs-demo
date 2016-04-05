import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {render} from 'react-dom';
import Dogs from './../components/dogs';
import Home from './../components/home';
import App from './../components';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/dogs' component={Dogs} />
    </Route>
  </Router>), document.getElementById('root')
);
