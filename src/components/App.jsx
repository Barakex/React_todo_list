import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}
