import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import AuthenticationPage from './components/authentication/AuthenticationPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      username: 'noamtayri'
    };
  }

  loginUser = (username) => {
    this.setState({
      username,
      isLoggedIn: true
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn && <AuthenticationPage loginUser={this.loginUser} />}
        {this.state.isLoggedIn && <MainPage username={this.state.username} />}
      </div>
    );
  }
}

export default App;