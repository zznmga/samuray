import React from 'react';
import Dialogs from './Dialogs';

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogPage;

        let onSendMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        let onChangeMessage = (message) => {
          store.dispatch(updateNewMessageBodyCreator(message));
        };

        return (
          <Dialogs
            sendMessage={onSendMessage}
            changeMessage={onChangeMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
