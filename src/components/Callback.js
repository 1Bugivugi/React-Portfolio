import React, { Component } from 'react';
import '../css/Callback.css';
import '../css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Callback extends Component {
  render(){
    return (
      <div className='callbackForm'>
        <div className='floatCenter p-3 rounded'>
          <label className='mb-3'>Contact me</label>
          <input type='text' placeholder='Your Full Name' className='w-100 rounded'></input>
          <input type='text' placeholder='Your Email' className='w-100 rounded'></input>
          <input type='text' placeholder='Message' className='w-100 rounded'></input>
          <Button className='submit rounded mx-auto' variant='dark'>Submit</Button>
        </div>
      </div>
    )
  }
}


export default Callback;
