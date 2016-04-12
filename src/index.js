import '~/src/styles/main.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RouteContainer from './RouteContainer.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <RouteContainer store={store} />
  </Provider>,
  document.getElementById('root')
);
