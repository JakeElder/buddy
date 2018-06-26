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
          <Alerts 
            alerts={[
              { priority: 'high', theme: 'Grooming', messageCount: 33, timeAgo: '12 minutes ago' },
              { priority: 'high', theme: 'Abuse', messageCount: 22, timeAgo: '35 minutes ago' },
              { priority: 'medium', theme: 'Grooming', messageCount: 112, timeAgo: '40 minutes ago' }
            ]}
          />
        </Container>
      </div>
    );
  }
}

export default App;
