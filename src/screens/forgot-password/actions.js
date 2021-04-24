import LOGIN from './actiontypes';


// Action Creators

export const refresh = payload => {
  return {type: LOGIN.REFRESH, payload: payload}
}

export const login = payload => {
  return {type: LOGIN.LOGIN, payload: payload}
}

// Thunk Actions

export const onRefresh = payload =>{
  return dispatch => {
    dispatch(refresh(payload));
  }
}

export const onLogin = payload =>{
  return dispatch => {
    dispatch(login(payload));
  }
}
