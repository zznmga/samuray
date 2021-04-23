import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => <div className={s.message}>{props.message}</div>;

const Dialogs = (props) => {
  const dialogsItems = [
    { id: 1, name: 'Nastya' },
    { id: 2, name: 'Vasya' },
    { id: 3, name: 'Sveta' },
  ];
  const messagesItems = [
    { id: 1, message: 'Hello, how are you ?' },
    { id: 2, message: 'Hasta la vista' },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsItems[0].name} id={dialogsItems[0].id} />
        <DialogItem name={dialogsItems[1].name} id={dialogsItems[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesItems[0].message} id={messagesItems[0].id} />
        <Message message={messagesItems[1].message} id={messagesItems[1].id} />
      </div>
    </div>
  );
};

export default Dialogs;
