import React, { Component } from 'react';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UserInfo />
      </div>
    );
  }
}

export default App;
