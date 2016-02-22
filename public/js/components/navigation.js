import React from 'react';

export default class Navigation extends React.Component {
  render () {
    return <div><ul className="navigation">
			<li className="nav-item"><a href="#">Log In</a></li>
			<li className="nav-item"><a href="#">Sign Up</a></li>
			<li className="nav-item"><a href="#">About</a></li>
			<li className="nav-item"><a href="#">Blog</a></li>
			<li className="nav-item"><a href="#">Contact</a></li>
		</ul></div>;
  }
}
