import React, { Component }           from 'react';
import { connect }                    from 'react-redux';


export default class HelloWorld extends Component {

  render() {
    
    const hello = 10;

    return <div>
      <h1>Hello World</h1>
      { hello }
      <p>Good bye</p>
    </div>
  }
}

export default connect(HelloWorld)