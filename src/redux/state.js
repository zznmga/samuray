export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (message) => ({
  type: UPDATE_NEW_POST_TEXT,
  message,
});

let store = {
  _state: {
    dialogPage: {
      dialogs: [
        { id: 1, name: 'Nastya' },
        { id: 2, name: 'Vasya' },
        { id: 3, name: 'Sveta' },
      ],
      messages: [
        { id: 1, message: 'Hello, how are you ?' },
        { id: 2, message: 'Hasta la vista' },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Espana es pais muy bonita', likesCount: 12 },
        {
          id: 2,
          message: 'Barcelona es la capital de Cataluna',
          likesCount: 13,
        },
      ],
      newPostText: 'Espana !',
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('rerenderEntireTree was called');
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newObj = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 5,
      };
      this._state.profilePage.newPostText = '';
      this._state.profilePage.posts.push(newObj);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.message;
      this._callSubscriber(this._state);
    }
  },

  subscribe(callback) {
    this._callSubscriber = callback;
  },
};

window.store = store;

export default store;
