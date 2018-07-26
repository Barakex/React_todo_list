import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import store from '../store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="app">
            <Header />
            <Container />
            <Footer />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
