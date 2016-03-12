import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {render} from 'react-dom';
import NavigationBar from './../components/navigation/navigation-bar';
import Dogs from './../components/dogs';
import Home from './../components/home';

class App extends Component {
  render(){
    return (
      <div><NavigationBar/><div>{this.props.children}</div></div>
    );
  }
}

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/dogs' component={Dogs} />
    </Route>
  </Router>), document.getElementById('root')
);
