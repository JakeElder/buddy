import React, { Component } from 'react';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Alerts from './components/Alerts';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <UserInfo />
          <Alerts />
        </Container>
      </div>
    );
  }
}

export default App;
