import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Button from "./Button";
import UsersList from "./UsersList";
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    firstNameInput: "",
    lastNameInput: "",
    userNameInput: "",
    users: [],
  };
  handleChange = (event) => {
    if (event.target.name === "firstName") {
      this.setState({
        firstNameInput: event.target.value,
      });
    } else if (event.target.name === "lastName") {
      this.setState({
        lastNameInput: event.target.value,
      });
    } else {
      this.setState({
        userNameInput: event.target.value,
      });
    }
  };
  formSubmit = () => {
    this.setState((prevState) => ({
      users: [
        ...prevState.users,
        {
          id: prevState.users.length + 1,
          firstName: this.state.firstNameInput,
          lastName: this.state.lastNameInput,
          userName: this.state.userNameInput,
          gamesPlayed: 0,
        },
      ],
    }));
  };
  deleteLastUser = () => {
    this.setState((prevState) => ({
      users: prevState.users.slice(0, -1),
    }));
  };
  noUsersFound = () => {
    return this.state.users.length === 0;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1 className="heading"> Games Journal</h1>
        <Form
          users={this.state.users}
          formSubmit={this.formSubmit}
          handleChange={this.handleChange}
          firstNameInput={this.state.firstNameInput}
          lastNameInput={this.state.lastNameInput}
          userNameInput={this.state.userNameInput}
        />
        <Button
          name="Remove Last User"
          deleteLastUser={this.deleteLastUser}
          disabled={this.noUsersFound()}
        />
        <h2>List of Users</h2>
        <UsersList usersArray={this.state.users} />
      </div>
    );
  }
}

export default App;
