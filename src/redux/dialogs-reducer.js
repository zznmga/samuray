export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
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
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = {
        id: 3,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, message],
        newMessageBody: '',
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.message };
    default:
      return state;
  }
};

export default dialogsReducer;
