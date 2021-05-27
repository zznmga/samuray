export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

let initialState = {
  dialogs: [
    { id: 1, name: 'Nastya' },
    { id: 2, name: 'Vasya' },
    { id: 3, name: 'Sveta' },
  ],
  messages: [
    { id: 1, message: 'Hello, how are you ?' },
    { id: 2, message: 'Hasta la vista' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = {
        id: 3,
        message: action.message,
      };
      return {
        ...state,
        messages: [...state.messages, message],
      };
    default:
      return state;
  }
};

export default dialogsReducer;
