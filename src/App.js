import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Typed from 'typed.js';
import Footer from './components/Footer';
import Project from './components/Project';
import Callback from './components/Callback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <div id='container'>
          <main>
            <header>
              <NavBar />
            </header>
              <div className='parallax'>
                <div className='centered'>
                  <h1>Billy Herington</h1>
                  <hr/>
                  <span className='typed'></span>
                </div>
              </div>
            <div className='projectsSection'>
              <span className='prHeader'>Projects</span>
                <section className='projects'>
                  <Project />
                  <Project />
                  <Project />
                  <Project />
                  <Project />
                </section>
            </div>
            <div className='parallax2'>
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
