import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  console.log(props);
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Arena_%28Unternehmen%29_logo.svg/1200px-Arena_%28Unternehmen%29_logo.svg.png" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <button onClick={props.logout}>{props.email} Logout</button>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
