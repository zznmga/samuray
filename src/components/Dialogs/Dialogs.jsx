import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let state = props.store.getState().dialogPage;

  const dialogsData = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesData = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onChange = (e) => {
    let message = newMessageElement.current.value; //e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(message));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsData} </div>
      <div className={s.messages}>
        {messagesData}
        <div>
          <div>
            <textarea
              onChange={onChange}
              ref={newMessageElement}
              value={state.newMessageBody}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
