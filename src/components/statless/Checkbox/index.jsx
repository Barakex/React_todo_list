import React from 'react';
import style from './style.scss';

const Checkbox = function (props) { // eslint-disable-line
  return (
    <div role="button" tabIndex='0' className={style.checkbox} onClick = {(e) => e.stopPropagation()}>
      <input checked={props.checked} type="checkbox" id={props.dataId} onChange={(e) => props.onChange(e)} />
      <label htmlFor={props.dataId}>{props.text}</label>
    </div>
  );
};

export default Checkbox;
