import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'

import { actionCreators } from '~/src/reducers/session';

import { reductions } from '~/src/reducers/session';

import SignupForm from '~/src/components/signup/SignupForm';

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
        <SignupForm onSubmit={this.completeSignIn} />
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
    setSession: bindActionCreators(actionCreators.setSession, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
