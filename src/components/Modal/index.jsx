import React from 'react';
import ReactDOM from 'react-dom';

import style from './style.scss';

export default class Modal extends React.Component {
  componentWillMount() {
    this.root = document.createElement('div');
    const { body } = document;
    body.appendChild(this.root);
    body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    const { body } = document;
    body.removeChild(this.root);
    body.style.overflow = 'auto';
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    return ReactDOM.createPortal(
      <div className={style.modal} onClick={(e) => this.props.onClick(e)}>
        <div className={style.content} onClick={(e) => this.handleClick(e)}>
          {this.props.children}
        </div>
      </div>,
      this.root,
    );
  }
}
