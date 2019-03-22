import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Typed from 'typed.js';
import Footer from './components/Footer';
import Project from './components/Project';
import Callback from './components/Callback';
import About from './components/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';

library.add(faAngleDoubleDown, faGithub, faTwitter, faLinkedin, faAngleDoubleUp);

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      firstList: [],
      secondList: []
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
    this.getFirstList();
    this.getSecondList();
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

    getFirstList = () => {
      axios.get('gitProj1.json')
        .then((response) => {
          // console.log(response.data)
         //  this.setState(() => {
         //    return { list: response }
         // })
         this.setState({ firstList: response.data })
        })
    }

    getSecondList = () => {
      axios.get('gitProj2.json')
        .then((response) => {
          // console.log(response.data)
         //  this.setState(() => {
         //    return { list: response }
         // })
         this.setState({ secondList: response.data })
        })
    }

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div id='container'>
          <main>
            <header>
            </header>
            <div className='parallax'>
            </div>
            <div className='centered'>
              <h1>Who is this guy?</h1>
              <hr/>
              <span className='typed'></span>
            </div>
            <div>
            <div>
              <NavBar />
            </div>
              <div className='aboutSection'>
                <a name='about' className='about'></a>
                <About />
              </div>
              <div className='projectsSection'>
                <a name='proj' className='proj'></a>
                <span className='prHeader'>Some of my latest work</span>
                <section className='projects'>
                  {
                    this.state.firstList
                      .map((response) => {
                          return <Project
                            gitList = {response}
                            key = {response.id}
                          />
                      })
                  }
                  <Collapse in={this.state.open}>
                    <div className='projects2'>
                    {
                      this.state.secondList
                        .map((response) => {
                            return <Project
                              gitList = {response}
                              key = {response.id}
                            />
                        })
                    }
                    </div>
                  </Collapse>
                </section>
                <div className='expandBtn'>
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
