import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  )(createStore);

  const store = applyMiddleware(promiseMiddleware())(finalCreateStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
};
