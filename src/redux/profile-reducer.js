import { profileAPI, usersAPI } from '../api/api';

export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_STATUS = 'SET_STATUS';

export const addPostActionCreater = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const removePostActionCreater = (id) => ({
  type: REMOVE_POST,
  id,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

let initialState = {
  posts: [
    { id: 1, message: 'Espana es pais muy bonita', likesCount: 12 },
    {
      id: 2,
      message: 'Barcelona es la capital de Cataluna',
      likesCount: 13,
    },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newObj = {
        id: 5,
        message: action.newPostText,
        likesCount: 5,
      };
      return { ...state, posts: [...state.posts, newObj] };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default profileReducer;

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    usersAPI.getProfileById(userId).then((result) => {
      dispatch(setProfile(result.data));
    });
  };
};

export const getProfileStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((result) => {
      dispatch(setStatus(result.data));
    });
  };
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((result) => {
      if (result.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
