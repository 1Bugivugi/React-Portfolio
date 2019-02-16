import React, { Component } from 'react';
import '../css/NavBar.css';
import logo from '../img/headerIcon.png';

class NavBar extends Component {
  render() {
    return(
      <div id='navbar'>
        <div className='logo'><img src={logo}/></div>
        <div className='navContent'>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar;
