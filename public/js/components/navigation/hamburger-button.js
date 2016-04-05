import React, {Component} from 'react';

const getButtonClasses = (openClose) => {
  return `menu menu--red ${openClose ? 'is-active' : ''}`;
};

const button = ({onClick, openClose}) => {
  return <button className={getButtonClasses(openClose)} onClick={onClick.bind(this)}>
    <span></span>
  </button>
};

button.PropTypes = {
  onClick: React.PropTypes.func.isRequired,
  openClose: React.PropTypes.func.isRequired,
};

export default button;
