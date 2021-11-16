import { authAPI } from '../api/api';
import { getAuthUserData } from './auth-reducer';

export const INITIALIZED_SUCCESS = 'samuray/app/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initialize = () => {
  return async (dispatch) => {
    console.log('App reducer initialize was called');
    let promiseResult = dispatch(getAuthUserData());
    promiseResult.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
