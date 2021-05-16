export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const SET_PROFILE = 'SET_PROFILE';

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (message) => ({
  type: UPDATE_NEW_POST_TEXT,
  message,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
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
  newPostText: 'Espana !',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newObj = {
        id: 5,
        message: state.newPostText,
        likesCount: 5,
      };
      return { ...state, posts: [...state.posts, newObj], newPostText: '' };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.message };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default profileReducer;
