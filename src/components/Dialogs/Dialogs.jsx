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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Nastya" id="1" />
        <DialogItem name="Vasya" id="2" />
        <DialogItem name="Kolya" id="3" />
        <DialogItem name="Helen" id="4" />
        <DialogItem name="Tonya" id="5" />
        <DialogItem name="Nyusya" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hello" />
        <Message message="Buenos noches" />
        <Message message="Hasta la vista" />
        <Message message="Hasta pronto" />
      </div>
    </div>
  );
};

export default Dialogs;
