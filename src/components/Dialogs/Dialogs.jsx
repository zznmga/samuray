import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  // debugger;
  const dialogsData = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesData = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsData} </div>
      <div className={s.messages}>{messagesData}</div>
    </div>
  );
};

export default Dialogs;
