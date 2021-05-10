import React from 'react';
import loading from '../../../assets/images/loading.gif';

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={loading} />
    </div>
  );
};

export default Preloader;
