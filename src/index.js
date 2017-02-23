import '~/src/styles/main.css';
import '~/node_modules/bootstrap/less/bootstrap.less';
import '~/node_modules/font-awesome/less/font-awesome.less';
import '~/node_modules/react-select/dist/react-select.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as InteractionSpaces from 'interaction-spaces';

import configureStore from './store/configureStore';
import RouteContainer from './RouteContainer.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <RouteContainer store={store} defaultAuthPath='/dashboard' defaultNoAuthPath='/signup'/>
  </Provider>,
  document.getElementById('root')
);
