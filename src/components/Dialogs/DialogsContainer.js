import React from 'react';
import Dialogs from './Dialogs';

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onChangeMessage = (message) => {
    props.store.dispatch(updateNewMessageBodyCreator(message));
  };

  return (
    <Dialogs
      sendMessage={onSendMessage}
      changeMessage={onChangeMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
