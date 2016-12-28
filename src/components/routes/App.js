import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '~/src/components/navs/Header.js';

class C extends Component {

  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default C;
