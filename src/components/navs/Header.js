import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, NavItem, Glyphicon, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { push } from 'react-router-redux';
import '~/src/styles/header.css';

import { clearSession } from '~/src/actions/session';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  goto = (url) => {
    this.props.push(url);
  }

  signOut = () => {
    this.props.clearSession();
    this.props.push('/');
  }

  render() {
    return (
      <div className='main-nav'>
        <Navbar>
          <Nav>
            <NavItem eventKey={1} className={this.props.pathname === '/'? 'active' : ''} onClick={() => this.goto('/')}>
              Home
            </NavItem>
            <NavItem eventKey={2} className={this.props.pathname === '/other'? 'active' : ''} onClick={() => this.goto('/other')}>
              Other
            </NavItem>
            {this.props.user && <NavItem eventKey={4} className={this.props.pathname === '/dashboard'? 'active' : ''} onClick={() => this.goto('/dashboard')}>
              Dashboard
            </NavItem>}
            {!this.props.user && <NavItem eventKey={3} className={this.props.pathname === '/signup'? 'active' : ''} onClick={() => this.goto('/signup')}>
              Signup
            </NavItem>}
            {this.props.user && <NavItem eventKey={4} onClick={this.signOut}>
              Signout
            </NavItem>}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

function mapStateToToProps(state) {
  return {
    user: state.session.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
    clearSession: bindActionCreators(clearSession, dispatch),
  };
}

export default connect(
  mapStateToToProps,
  mapDispatchToProps
)(Header);
