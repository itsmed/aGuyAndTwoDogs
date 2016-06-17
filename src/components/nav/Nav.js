import    React, { Component }    from 'react';

// require ('./nav.scss');

export default class Nav extends Component {

  render() {

    return <div className="nav col-xs-10 col-xs-offset-1">
      <ul clasName="nav-list">
        <li className="nav-choices">Home</li>
        <li className="nav-choices">About</li>
        <li className="nav-choices">Projects</li>
        <li className="nav-choices">Blog</li>
        <li className="nav-choices">Cool Stuff</li>
      </ul>
    </div>;

  }

}