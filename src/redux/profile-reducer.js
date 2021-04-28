export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (message) => ({
  type: UPDATE_NEW_POST_TEXT,
  message,
});

const profileReducer = (state, action) => {
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
