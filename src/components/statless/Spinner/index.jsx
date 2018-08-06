import React from 'react';
import style from './style.scss';

const Spinner = function () { // eslint-disable-line
  return (
    <div className={style.loader}>
      <span className={style.basic}></span> { /* eslint-disable-line */ }
    </div>
  );
};

export default Spinner;
