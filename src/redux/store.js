import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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
      newMessageBody: '',
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
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('rerenderEntireTree was called');
  },

  dispatch(action) {
    console.log(action.type);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },

  subscribe(callback) {
    this._callSubscriber = callback;
  },
};

window.store = store;

export default store;
