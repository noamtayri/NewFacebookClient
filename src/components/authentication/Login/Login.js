import React, { Component } from 'react';
import './Login.scss';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  dummyLogin = () => {
    alert(`username = ${this.state.username} \npassword = ${this.state.password}`);
  }

  login = () => {
    const loginUrl = ``;
    const baseUrl = ``;
    axios({
      url: loginUrl,
      baseURL: baseUrl,
      method: 'GET',
    })
      .then(res => res.data)
      .then(user => {
        if (user.code === -1) {
          console.log('confirmed user');
          this.props.userLoggedIn(user);
        } else {
          console.log('waiting for confirm code');
        }
      })
      .catch(e => {
        if (e.response !== undefined
          && e.response.data !== undefined
          && e.response.data.message !== undefined
          && e.response.status === 500) {
          alert(e.response.data.message);
        } else {
          alert(e);
          console.log(e);
        }
      });
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <div className="form">
          <label>Username</label>
          <br />
          <input type="text" placeholder="Enter Username" name="username" required onChange={event => this.setState({ username: event.target.value })} />
          <br />
          <label>Password</label>
          <br />
          <input type="text" placeholder="Enter Password" name="password" required onChange={event => this.setState({ password: event.target.value })} />
          <br />
          <button onClick={() => this.dummyLogin()}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
