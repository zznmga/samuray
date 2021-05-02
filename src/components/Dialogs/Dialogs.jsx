import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;

  const dialogsData = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesData = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let onSendMessage = () => props.sendMessage();

  let onChangeMessage = (e) => {
    let message = e.target.value;
    props.changeMessage(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsData} </div>
      <div className={s.messages}>
        {messagesData}
        <div>
          <div>
            <textarea
              onChange={onChangeMessage}
              value={newMessageBody}
              placeholder="Input value"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
