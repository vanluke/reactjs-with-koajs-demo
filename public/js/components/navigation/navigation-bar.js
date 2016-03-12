import React from 'react';
import Navigation from './navigation';
import HamburgerButton from './hamburger-button';
import '!style!css!sass!./_nav.scss';
const buttonRef = 'buttonToggleManu';
const navigationRef = 'buttonToggleManu';

const generateLiks = () => {
  return [
    { url: '', name: 'home' },
    { url: 'dogs', name: 'dogs' }
  ]
};

const links = generateLiks();

export default class NavigationBar extends React.Component {
  constructor (props) {
    super(props);
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
