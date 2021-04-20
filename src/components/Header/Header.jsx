import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Arena_%28Unternehmen%29_logo.svg/1200px-Arena_%28Unternehmen%29_logo.svg.png" />
    </header>
  );
};

export default Header;
