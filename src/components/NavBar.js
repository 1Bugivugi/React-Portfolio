import React, { Component } from 'react';
import '../css/NavBar.css';
import logo from '../img/headerIcon.png';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    this.setState({scroll: window.scrollY});
  };

  componentDidMount() {
    const el = document.querySelector('#navbar');

    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  };

  componentDidUpdate() {
    this.state.scroll > this.state.top ? document.body.style.paddingTop =
    `${this.state.height}px` : document.body.style.paddingTop = 0;
  }

  render() {
    return(
      <div id='navbar' className={this.state.scroll > this.state.top ? "sticky" : ""}>
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
