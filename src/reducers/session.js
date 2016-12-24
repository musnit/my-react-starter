import { SET_SESSION, CLEAR_SESSION } from '../constants/ActionTypes';
import apiClient from '~/src/services/ApiClient.js';

let localUser = JSON.parse(localStorage.getItem('user'));
apiClient.setUser(localUser || undefined);

const initialState = {
  user: localUser || undefined
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case SET_SESSION:
      apiClient.setUser(action.user);
      localStorage.setItem('user', JSON.stringify(action.user));
      return { user: action.user };

    case CLEAR_SESSION:
      apiClient.setUser(undefined);
      localStorage.removeItem('user');
      return {};

    default:
      return state
  }
};
