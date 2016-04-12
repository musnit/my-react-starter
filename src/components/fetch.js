//Adapted from https://github.com/este/este/blob/master/src/common/components/createFetch.js
//This will trigger any actions sent to fetch whenever a component mounts.
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function fetch(Wrapped, options) {
  class Fetch extends Component {

    componentDidMount() {
      const {dispatch, location, params} = this.props;

      options.actions.forEach((action) =>
        dispatch(action({location, params, actionParams: options.actionParams}))
      );
    }

    render() {
      return <Wrapped {...this.props} />;
    }

  };

  Fetch.propTypes = {
    dispatch: PropTypes.func,
    location: PropTypes.object,
    params: PropTypes.object
  }

  return connect()(Fetch);

};
