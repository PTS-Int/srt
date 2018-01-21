import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import database from './app/firebase'

class App extends Component {
  state = {
    finish: false,
    num: 0,
  }

  componentWillMount() {
    database.ref('/').once('value').then((snapshot) => {
      this.setState(() => ({
        finish: true,
        num: snapshot.val().trainnum,
    }))
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.finish ? JSON.stringify(this.state) : "รอแปบ"}
        </p>
      </div>
    );
  }
}

export default App;
