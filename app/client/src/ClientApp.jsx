import React, { Component } from 'react';
import { render } from 'react-dom';

import './client_app.scss';

import Header from './components/Header/Header.jsx';
import Landing from './components/Landing/Landing.jsx';

class ClientApp extends Component {
  render() {
    return (<div className="main col-xs-12">
      <Header />
      <Landing />
    </div>
    )
  }
}

render(<ClientApp/>, document.getElementById('app'));