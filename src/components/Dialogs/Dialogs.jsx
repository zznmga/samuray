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
  const dialogs = [
    { id: 1, name: 'Nastya' },
    { id: 2, name: 'Vasya' },
    { id: 3, name: 'Sveta' },
  ];
  const messages = [
    { id: 1, message: 'Hello, how are you ?' },
    { id: 2, message: 'Hasta la vista' },
  ];
  const dialogsData = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesData = messages.map((m) => (
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
