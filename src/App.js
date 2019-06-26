import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import AuthenticationPage from './components/authentication/AuthenticationPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn && <AuthenticationPage />}
        {this.state.isLoggedIn && <MainPage />}
      </div>
    );
  }
}

export default App;