import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';

class RouteContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { history: syncHistoryWithStore(browserHistory, this.props.store) };
  }

  render() {
    return (
      <Router ref="router" history={this.state.history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(undefined, mapDispatchToProps)(RouteContainer);
