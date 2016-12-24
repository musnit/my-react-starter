import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

import { setSession } from '~/src/actions/session';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  completeSignIn = () => {
    let userMock = { username: 'bobby', password: 'temp', sessionToken: 'asdf' };
    this.props.setSession(userMock);
    this.props.push('/dashboard');
  }

  render() {
    return (
      <div className="login-page app-page" >
        {<Button className="login-button" bsStyle="primary"
          onClick={this.completeSignIn} >
          Sign In!
        </Button>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
    setSession: bindActionCreators(setSession, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
