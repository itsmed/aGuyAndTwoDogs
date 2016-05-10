import React, { Component }         from 'react';

import './about.scss';

export default class About extends Component {

  render () {

    return <div>
      <div className='about-container'>
        <img className='about-pic'></img>
        <p className='about-pic-credit'>Photo by: <a href="http://www.saposki.com" target="_blank">SAPOSKI</a></p>
      </div>
      <div className='about-content-wrapper'>
        <h2 className='about-content'>About Me</h2>
        <p className='about-content'>I’m a full stack software engineer who works with customers and design teams to build rich user-facing applications. In my spare time I enjoy working on personal as well as open source projects. I like finding new technologies, and am always looking for new tools to increase development efficiency. </p>
        <p className='about-content'>I am passionate about tech, education and civis. My hobbies include working on projects that blend the three together. I also enjoy spending time with my dogs, hiking, and making pie.</p>
      </div>
    </div>;
  }

}