import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'samuray/profile/ADD_POST';
const REMOVE_POST = 'samuray/profile/REMOVE_POST';
const SET_PROFILE = 'samuray/profile/SET_PROFILE';
const SET_STATUS = 'samuray/profile/SET_STATUS';
const UPLOAD_AVATAR_SUCCESS = 'samuray/profile/UPLOAD_AVATAR_SUCCESS';

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

export const uploadAvatarSuccess = (photos) => ({
  type: UPLOAD_AVATAR_SUCCESS,
  photos,
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
    case UPLOAD_AVATAR_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export default profileReducer;

export const getProfileThunk = (userId) => {
  return async (dispatch) => {
    let result = await usersAPI.getProfileById(userId);
    dispatch(setProfile(result.data));
  };
};

export const getProfileStatusThunk = (userId) => {
  return async (dispatch) => {
    let result = await profileAPI.getStatus(userId);
    dispatch(setStatus(result.data));
  };
};

export const updateStatusThunk = (status) => {
  return async (dispatch) => {
    let result = await profileAPI.updateStatus(status);
    if (result.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const uploadAvatarThunk = (avatar) => {
  return async (dispatch) => {
    let result = await profileAPI.updateAvatar(avatar);
    if (result.data.resultCode === 0) {
      dispatch(uploadAvatarSuccess(result.data.data.photos));
    }
  };
};
