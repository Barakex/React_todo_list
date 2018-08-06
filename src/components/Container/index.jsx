import React from 'react';
import { Route } from 'react-router-dom';
import FilmPortal from './FilmPortal';
import TodoTestTask from './TodoTestTask';
import style from './style.scss';

export default class Container extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Route exact path="/" component={FilmPortal} />
        <Route path="/todoTestTask" component={TodoTestTask} />
      </div>
    );
  }
}
