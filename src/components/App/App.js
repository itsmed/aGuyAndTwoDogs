import React, { Component }             from 'react';
import fetch                            from 'isomorphic-fetch';
import { connect }                      from 'react-redux';
import HelloWorld                       from '../HelloWorld';

export default class App extends Component {

  render() {
    return <div>
      <HelloWorld />
    </div>
  }

}

export default connect()(App);