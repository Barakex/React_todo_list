import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import store from '../store';

import style from './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={style.app}>
            <Header />
            <Container />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
