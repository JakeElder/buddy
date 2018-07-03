import React, { Component } from 'react';
import Header from '../Header';
import UserInfo from '../UserInfo';
import Alerts from '../Alerts';
import Container from '../Container';
import s from './App.css';

class App extends Component {
  state = {
    alerts: []
  }

  componentWillMount() {
    window.fetch('http://localhost:3050/api/alerts')
      .then(r => r.json())
      .then(alerts => console.log(alerts))
  }

  render() {
    return (
      <div className={s.root}>
        <Header />
        <Container>
          <UserInfo />
          <Alerts alerts={this.state.alerts} />
        </Container>
      </div>
    );
  }
}

export default App;
