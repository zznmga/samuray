import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Nastya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Katya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Petya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Gena</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Kolya</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is you it ?</div>
        <div className={s.message}>Yo</div>
        <div className={s.message}>Bienvenidos !</div>
      </div>
    </div>
  );
};

export default Dialogs;
