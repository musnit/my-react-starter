import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import App from '~/src/components/routes/App';
import Home from '~/src/components/routes/Home';
import Signup from '~/src/components/routes/Signup';
import Dashboard from '~/src/components/routes/Dashboard';

class RouteContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { history: syncHistoryWithStore(browserHistory, this.props.store) };
  }

  requireAuth(nextState, replace) {
    const user = this.props.store.getState().session.user;
    if (!user) {
      replace(this.props.defaultNoAuthPath);
    }
  }

  requireNoAuth(nextState, replace) {
    const user = this.props.store.getState().session.user;
    if (user) {
      replace(this.props.defaultAuthPath);
    }
  }

  render() {
    return (
      <Router ref='router' history={this.state.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route onEnter={this.requireAuth.bind(this)}>
            <Route path='/dashboard' component={Dashboard} onEnter={this.requireAuth.bind(this)} />
          </Route>
          <Route onEnter={this.requireNoAuth.bind(this)}>
            <Route path='signup' component={Signup} onEnter={this.requireNoAuth.bind(this)} />
          </Route>
        </Route>
        <Redirect from='/**' to='/' />
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(undefined, mapDispatchToProps)(RouteContainer);
