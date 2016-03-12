import React from 'react';
import { Link } from 'react-router';

const getClass = (openClose) => {
  return `${openClose ? '' : 'hide'}`;
};

const createLinkItems = (items) => {
  return items.map((item, i) => {
    return <li key={i}><Link to={`${item.url}`}>{item.name}</Link></li>
  });
};

const navigationList = props => {
  const { links, openClose } = props;
  const navigationItems = createLinkItems (links);
  return <nav id="navigation" className={getClass(openClose)}>
    <ul>
      {navigationItems}
    </ul>
  </nav>
};

export default navigationList;
