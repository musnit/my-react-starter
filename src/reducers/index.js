import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import session from './session';

const rootReducer = combineReducers({
  session,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
