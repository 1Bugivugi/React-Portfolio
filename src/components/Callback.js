import React, { Component } from 'react';
import '../css/Callback.css';

class Callback extends Component {
  render(){
    return (
      <div className='callbackForm'>
        <div className='floatCenter'>
          <label>Contact me</label>
          <input type='text' width='25%' placeholder='Your Full Name'></input>
          <input type='text' width='25%' placeholder='Your Email'></input>
          <input type='text' width='25%' placeholder='Message'></input>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}


export default Callback;
