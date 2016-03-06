import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import {render} from 'react-dom';
import NavigationBar from './../components/navigation/navigation-bar';
import Currency from './../components/currency/currency';
import Checkout from './../components/checkout';

class App extends Component {
  render(){
    return (
      <div><NavigationBar/><div>{this.props.children}</div></div>
    );
  }
}

class Home extends Component {
  render(){
    return (
      <div>Welcome!</div>
    );
  }
}

ReactDOM.render(
  (<Router>
    <Route path='/' component={App}>
     <IndexRoute component={Home}/>
      <Route path='/currency' component={Currency} />
      <Route path='/checkout' component={Checkout} />
    </Route>
  </Router>), document.getElementById('root')
);
