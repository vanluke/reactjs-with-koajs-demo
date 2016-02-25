import React, { Component } from 'react';
import {render} from 'react-dom';
import NavigationBar from './../components/navigation/navigation-bar';

class App extends Component {
  render(){
    return (
      <div><NavigationBar/><div> <h1>Pure CSS Off-Screen Menu</h1></div></div>
    );
  }
}

render(<App />, document.getElementById('root'));
