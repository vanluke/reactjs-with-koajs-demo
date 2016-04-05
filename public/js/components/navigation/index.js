import '!style!css!sass!./_nav.scss';
import React from 'react';
import Navigation from './navigation';
import HamburgerButton from './hamburger-button';

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
    return <div>
      <HamburgerButton onClick={onClick} openClose={openClose} />
      <Navigation links={links} openClose={openClose} />
    </div>
  }

  state = {
    openClose: false
  };
}
