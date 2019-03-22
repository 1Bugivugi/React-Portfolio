import React, { Component } from 'react';
import '../css/Project.css'


class Project extends Component {

  componentDidMount(){
    this.getList();
  }

  getList = () => {
    if (!this.props.gitList){
      return [];
    } else {
      return this.props.gitList
    }
  }

  render() {
    return (
      <div id='img-with-text' className='projContainer'>
        <img src={this.props.gitList.img} alt='Placeholder'/>
        <div className='overlay'>
          <div className='text'><a href={this.props.gitList.link}>{this.props.gitList.description}</a></div>
        </div>
      </div>
    )
  }
}

export default Project;
