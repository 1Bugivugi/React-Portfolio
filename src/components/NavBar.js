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
            <li><a href='#about'>About</a></li>
            <li><a href='#proj'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar;
