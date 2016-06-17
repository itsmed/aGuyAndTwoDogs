import React, { Component } from 'react';
import { render }           from 'react-dom';

import './index.scss';

import Header               from './src/components/header/Header';
import About                from './src/components/about/About';

class HelloWorld extends Component {
  render() {
    return (<div className="main col-xs-12">
      <Header />
      <About />
    </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'));