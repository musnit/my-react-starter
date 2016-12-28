import apiClient from '~/src/services/ApiClient.js';
import { makeReducer } from '~/src/helpers/reducerHelpers';

let localUser = JSON.parse(localStorage.getItem('user'));
apiClient.setUser(localUser || undefined);

const initialState = {
  user: localUser || undefined
};

export const types = {
  SET_SESSION: 'session/main/SET_SESSION',
  CLEAR_SESSION: 'session/main/CLEAR_SESSION'
};

export const actionCreators = {
  setSession: (user) => {
    return { type: types.SET_SESSION, user };
  },
  clearSession: () => {
    return { type: types.CLEAR_SESSION };
  }
};

export const reductionFunctions = {
  setSession: (state = initialState, action) => {
    apiClient.setUser(action.user);
    localStorage.setItem('user', JSON.stringify(action.user));
    return { user: action.user };
  },
  clearSession: (state = initialState, action) => {
    apiClient.setUser(undefined);
    localStorage.removeItem('user');
    return {};
  }
};

const actionMap = [{
    type: types.SET_SESSION,
    reductionFunction: reductionFunctions.setSession
  },
  {
    type: types.CLEAR_SESSION,
    reductionFunction: reductionFunctions.clearSession
}];

const reducer = makeReducer(initialState, actionMap);
export default reducer;
