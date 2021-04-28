export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  message,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = {
        id: 3,
        message: state.newMessageBody,
      };
      state.messages.push(message);
      state.newMessageBody = '';
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.message;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
