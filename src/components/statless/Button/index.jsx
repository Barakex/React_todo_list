import React from 'react';
import style from './style.scss';

const Button = function (props) { // eslint-disable-line
  return (
    props.accept ?
      <div className={style.acceptButton}>
        <button
          className={props.active ? style.active : props.passive}
          onClick={() => props.onClick()}
        >
          {props.children}
        </button>
      </div>
      :
      <div className={style.canselButton}>
        <button
          className={props.active ? style.active : props.passive}
          onClick={() => props.onClick()}
        >
          {props.children}
        </button>
      </div>
  );
};

export default Button;
