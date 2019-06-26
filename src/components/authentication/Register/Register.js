import React, { Component } from 'react';
import './Register.scss';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verifyPassword: ''
    };
  }

  dummyRegister = () => {
    alert(`username = ${this.state.username} \npassword = ${this.state.password}\nverifyPassword = ${this.state.verifyPassword}`);
  }

  register = () => {
    const loginUrl = ``;
    const baseUrl = ``;
    axios({
      url: loginUrl,
      baseURL: baseUrl,
      method: 'POST',
      data: {
        playground: this.state.playground,
        email: this.state.email,
        userName: this.state.userName,
        //avatar: this.state.avatar,
        role: this.state.role
      }
    })
      .then(res => res.data)
      .then(user => {
        this.props.changeStep('code');

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
      <div className="Register">
        <h1>Register</h1>
        <div className="form">
          <label>Username</label>
          <input type="text" placeholder="Enter Username" name="username" required onChange={event => this.setState({ username: event.target.value })} />
          <br />
          <label>Password</label>
          <input type="text" placeholder="Enter Password" name="password" required onChange={event => this.setState({ password: event.target.value })} />
          <br />
          <label>Verify Password</label>
          <input type="text" placeholder="Enter Password" name="verifyPassword" required onChange={event => this.setState({ verifyPassword: event.target.value })} />
          <br />
        </div>
        <br />

        <button onClick={() => this.dummyRegister()}>Register</button>
      </div>
    );
  }
}

export default Register;