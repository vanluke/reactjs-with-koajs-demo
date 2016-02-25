import React, {Component} from 'react';

const getButtonClasses = (openClose) => {
  return `menu menu-hamburger-red ${openClose ? 'is-active' : ''}`;
};

const button = ({onClick, openClose}) => {
  return <button className={getButtonClasses(openClose)} onClick={onClick.bind(this)}>
    <span></span>
  </button>
};

export default button;
