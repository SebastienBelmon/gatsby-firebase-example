import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userEmail: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;


  }

  render() {
    const { email, password, userEmail } = this.state;

    return (
      <div>
        {userEmail && <h3>Welcome ! You are logged with {userEmail}</h3>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              name="email"
              onChange={this.handleChange}
              type="email"
              value={email}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password}
            />
          </div>
          <button type="submit">Register</button>
        </form>

        <button onClick={() => this.getLoggedUser()}>user</button>
      </div>
    );
  }
}
