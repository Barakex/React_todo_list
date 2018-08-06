import React from 'react';
import Button from '../../../statless/Button';

import style from './style.scss';

export default class TodoForm extends React.Component {
  render() {
    const {
      title,
      onChange,
      onClick,
      titleValue,
      textValue
    } = this.props;
    return (
      <div className={style.formContainer}>
        <h2 className={style.title}>{title}</h2>
        <span>Title:</span>
        <input value={titleValue} className={style.titleValue} type="text" onChange={e => onChange(e, 'title')} />
        <span>Text:</span>
        <textarea value={textValue} className={style.textValue} type="text" onChange={e => onChange(e, 'text')} />
        <div className={style.buttonContainer}>
          <Button accept onClick={() => onClick()}>Accept</Button>
        </div>
      </div>
    );
  }
}
