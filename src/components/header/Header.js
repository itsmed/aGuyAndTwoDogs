import React, { Component }        from  'react';

import Nav                         from  '../nav/Nav';

require('./header.scss');


export default class Header extends Component {

  render() {

    return <div>
      <div className="header-background"></div>
      <div className='header'>
        <div className='logo'></div>
        <h1>A Guy And Two Dogs</h1>
      </div>
      <ul> 
      <li className='social-links'><a href="https://www.linkedin.com/in/dejongill"><i className="fa fa-linkedin-square fa-camera-retro fa-3x link-thumb"></i></a></li>
      <li className='social-links'><a href="https://github.com/itsmed" target="_blank"><i className="fa fa-github-square fa-camera-retro fa-3x link-thumb"></i></a></li>
      <li className='social-links'> <a href="https://twitter.com/dejongill" target="_blank"><i className="fa fa-twitter-square fa-3x link-thumb"></i></a></li>
          </ul>
    </div>;
  }

}