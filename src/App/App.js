import React, { Component } from 'react';
import User from '../User/User';
import './App.css';

const MOCK_USERS = [
  {
    id: 1,
    name: 'Alice',
  },
  {
    id: 2,
    name: 'Bob',
  },
  {
    id: 3,
    name: 'Charlie',
  },
];

class App extends Component {
  state = {
    users: MOCK_USERS,
    specialUsers: [],
  };

  addToSpecialUsers = id => {
    // They are already special
    if (this.state.specialUsers.find(user => user.id === id)) return;

    const user = this.state.users.find(user => user.id === id);

    this.setState(state => ({
      specialUsers: state.specialUsers.concat(user),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Users</h1>

        <div className="App__user-list">
          {this.state.users.map(user => (
            <User
              key={user.id}
              {...user}
              addToSpecialUsers={() => this.addToSpecialUsers(user.id)}
            />
          ))}
        </div>

        <h1>Special users</h1>

        <div className="App__user-list">
          {this.state.specialUsers.map(user => (
            <User key={user.id} {...user} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
