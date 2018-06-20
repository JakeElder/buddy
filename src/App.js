import React, { Component } from 'react';
import Header from './Header';
import UserInfo from './content/user_info';
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
