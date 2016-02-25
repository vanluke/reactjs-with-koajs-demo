import React from 'react';
import Navigation from './navigation';
import HamburgerButton from './hamburger-button';

const buttonRef = 'buttonToggleManu';
const navigationRef = 'buttonToggleManu';

const generateLiks = () => {
  return [
    { url: 'http://onet.pl', name: 'onet.pl' },
    { url: 'http://facebook.com', name: 'facebook.com' },
    { url: 'http://ford.com', name: 'ford.com' }
  ]
};

const links = generateLiks();


export default class NavigationBar extends React.Component {
  constructor (props) {
    super(props);
  //  this.toggleHamburgerButton = toggleHamburgerButton.bind(this);
  }

  toggleHamburgerButton (props, btn) {
    this.setState({
      openClose: !this.state.openClose
    });
  }

  render () {
    const onClick = this.toggleHamburgerButton.bind(this);
    const { openClose } = this.state;
    const hamburgerButton = HamburgerButton({ onClick, openClose });
    const navigationList = Navigation({ links, openClose });
    return <div>
      {hamburgerButton}
      {navigationList}
    </div>
  }

  state = {
    openClose: false
  };
}
