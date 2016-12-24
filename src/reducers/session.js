const SET_SESSION = 'session/main/SET_SESSION';
const CLEAR_SESSION = 'session/main/CLEAR_SESSION';

import apiClient from '~/src/services/ApiClient.js';

let localUser = JSON.parse(localStorage.getItem('user'));
apiClient.setUser(localUser || undefined);

const initialState = {
  user: localUser || undefined
};

export default function reducer(state = initialState, action) {
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

export function setSession(user) {
  return { type: SET_SESSION, user };
};

export function clearSession() {
  return { type: CLEAR_SESSION };
};
