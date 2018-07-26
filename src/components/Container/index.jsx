import React from 'react';
import { Route } from 'react-router-dom';
import FilmPortal from './FilmPortal';
import TodoTestTask from './TodoTestTask';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Container</h1>
        <div className="dashboard">
          <Route exact path="/" component={FilmPortal} />
          <Route path="/todoTestTask" component={TodoTestTask} />
        </div>
      </div>
    );
  }
}
