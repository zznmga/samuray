export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (message) => ({
  type: UPDATE_NEW_POST_TEXT,
  message,
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newObj = {
        id: 5,
        message: state.newPostText,
        likesCount: 5,
      };
      state.newPostText = '';
      state.posts.push(newObj);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.message;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
