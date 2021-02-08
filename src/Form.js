import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    contactExists: false,
  };
  static propTypes = {
    formSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };
  inputsAreEmpty = () => {
    return (
      this.props.firstNameInput === "" ||
      this.props.lasttNameInput === "" ||
      this.props.userNameInput === ""
    );
  };
  checkIfUserExists = (newUsername) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.userName === newUsername) {
        return true;
      }
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const userExists = this.checkIfUserExists(this.props.userNameInput);

    if (!userExists) {
      this.setState(() => ({
        contactExists: false,
      }));
      this.props.formSubmit();
    } else {
      this.setState(() => ({
        contactExists: true,
      }));
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="firstName"
          placeholder="Your First Name"
          handleChange={this.props.handleChange}
        />
        <Input
          name="lastName"
          placeholder="Your Last Name"
          handleChange={this.props.handleChange}
        />
        <Input
          name="userName"
          placeholder="Choose an Username"
          handleChange={this.props.handleChange}
        />
        {this.state.contactExists ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : (
          ""
        )}
        <Button name="Add User" disabled={this.inputsAreEmpty()} />
      </form>
    );
  }
}

export default Form;
