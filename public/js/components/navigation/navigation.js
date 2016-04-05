import React from 'react';
import { Link } from 'react-router';

const getClass = (openClose) => {
  return `navigation ${openClose ? '' : 'hide'}`;
};

const createLinkItems = (items) => {
  return items.map((item, i) => {
    return <li key={i}><Link to={`${item.url}`}>{item.name}</Link></li>
  });
};

const NavigationList = props => {
  const { links, openClose } = props;
  const navigationItems = createLinkItems (links;
  return <nav className={getClass(openClose)} id="navigation">
    <ul>
      {navigationItems}
    </ul>
  </nav>
};

NavigationList.PropTypes = {
  links: React.PropTypes.array.isRequired,
  openClose: React.PropTypes.func.isRequired
};

export default NavigationList;
