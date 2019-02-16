import React, { Component } from 'react';
import '../css/Project.css'
import placeholder from '../img/placeholder.png'

class Project extends Component {
  render() {
    return (
      <div className='img-with-text'>
        <img src={placeholder} alt='Placeholder'/>
        <p>Some text</p>
      </div>
    )
  }
}

export default Project;
