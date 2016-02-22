import React from 'react';
import Navigation from './navigation';

export default class NavigationBar extends React.Component {
  render () {
    return <div>
      <Navigation />
      <input type="checkbox" id="nav-trigger" className="nav-trigger" />
      <label htmlFor="nav-trigger"></label>
    </div>
  }
}
