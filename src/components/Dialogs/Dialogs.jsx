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

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsData} </div>
      <div className={s.messages}>
        {messagesData}
        <textarea ref={newMessageElement} cols="30" rows="10"></textarea>
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
