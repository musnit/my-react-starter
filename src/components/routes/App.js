import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '~/src/components/navs/Header.js';

class C extends Component {

  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        {this.props.children}
      </div>
    );
  }
}

export default C;
