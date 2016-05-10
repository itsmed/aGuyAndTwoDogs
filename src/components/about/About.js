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
          <p className='about-content'> The right side of the nav bar should include those cool link/link-images for linkedIn, github and maaaaybe twitter.</p>
          <p className='about-content'>The projects tab should be a drop-down, with links to simple games (coming soon!) and stuff I've built (also, coming soon....)</p>
          <p className='about-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>
      </div>
    </div>;
  }

}