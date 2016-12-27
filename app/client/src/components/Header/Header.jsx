import React, { Component } from  'react';

import Nav from  '../Nav/Nav.jsx';
import AdminDashboard from '../AdminDashboard/AdminDashboard.jsx'
import './header.scss';


export default class Header extends Component {

  render() {

    return <div className='header-container col-xs-12'>
      <div className="header-background col-xs-10 col-xs-offset-1"></div>
      <div className='header col-xs-3 col-xs-offset-4'>
        <AdminDashboard />
      </div>
      <div className="social-container col-xs-6 col-xs-offset-3">
        <ul>
          <li className='social-links'><a href='https://www.linkedin.com/in/dejongill'><i className='fa fa-linkedin-square fa-camera-retro fa-3x social-links'></i></a></li>
          <li className='social-links'><a href='https://github.com/itsmed' target='_blank'><i className='fa fa-github-square fa-camera-retro fa-3x social-links'></i></a></li>
          <li className='social-links'> <a href='https://twitter.com/dejongill' target='_blank'><i className='fa fa-twitter-square fa-3x social-links'></i></a></li>
          <li className='social-links'><a href='mailto:dejonjgill@gmail.com' className='social-links'>Contact</a></li>
        </ul>
      </div>
    </div>;
  }

}