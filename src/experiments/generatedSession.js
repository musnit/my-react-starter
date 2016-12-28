import apiClient from '~/src/services/ApiClient.js';
import { makeReducer } from '~/src/helpers/reducerHelpers';

let localUser = JSON.parse(localStorage.getItem('user'));
apiClient.setUser(localUser || undefined);

const initialState = {
  user: localUser || undefined
};

const namespace = 'session/main/';

export const reducerSpec = {
  SET_SESSION: {
    reducer: (state = initialState, action) => {
      apiClient.setUser(action.user || '');
      localStorage.setItem('user', JSON.stringify(action.user));
      return { user: action.user };
    },
    actionCreator: (user) => {
      return { user };
    }
  },
  CLEAR_SESSION: {
    reducer: (state = initialState, action) => {
      apiClient.setUser(undefined);
      localStorage.removeItem('user');
      return {};
    }
  }
};

const reducer = makeReducer(initialState, reducerSpec, namespace);
export default reducer.fn;
export const types = reducer.types;
export const actionCreators = reducer.actionCreators;
export const reductions = reducer.reductions;
