import React from 'react';
import loading from '../../../assets/images/loading.gif';
import style from './Preloader.module.css';

let Preloader = (props) => {
  return (
    // <div style={{ backgroundColor: 'white' }}>
    //   <img src={loading} />
    // </div>
    <div className={style.ldsdualring}></div>
  );
};

export default Preloader;
