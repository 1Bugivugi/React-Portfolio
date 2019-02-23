import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Typed from 'typed.js';
import Footer from './components/Footer';
import Project from './components/Project';
import Callback from './components/Callback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

library.add(faAngleDoubleDown, faGithub, faTwitter, faLinkedin, faAngleDoubleUp);

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    let options = {
      strings: ["Something Something Something Something Something Something Something"],
      typeSpeed: 40,
      loop: true,
      loopCount: Infinity,
      backSpeed: 60,
      backDelay: 2000
    }
    let typed = new Typed(".typed", options);
  }

  changeButton = () => {
    if (this.state.open === true) {
      return (
        <FontAwesomeIcon icon={['fas', 'angle-double-up']} size='lg'/>
      )
    } else {
        return (
          <FontAwesomeIcon icon={['fas', 'angle-double-down']} size='lg'/>
        )
      }
    }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div id='container'>
          <main>
            <header>
              <NavBar />
            </header>
              <a name='about'></a>
              <div className='parallax'>
                <div className='centered'>
                  <h1>Billy Herington</h1>
                  <hr/>
                  <span className='typed'></span>
                </div>
              </div>
            <div className='projectsSection'>
              <span className='prHeader'><a name='proj'></a>Some of my latest work</span>
              <section className='projects'>
                <Project />
                <Project />
                <Project />
                  <Collapse in={this.state.open}>
                    <div className='projects2'>
                      <Project />
                      <Project />
                      <Project />
                    </div>
                  </Collapse>
              </section>
              <div>
                <Button
                variant='white'
                onClick={() => this.setState({ open: !open  })}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                >
                  { this.changeButton() }
                </Button>
              </div>
            </div>
            <div className='parallax2'>
              <a name='contact'></a>
              <Callback />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
