import * as types from '../constants/ActionTypes';

export function setSession(user) {
  return { type: types.SET_SESSION, user };
};

export function clearSession() {
  return { type: types.CLEAR_SESSION };
};
