import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    formSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };
  render() {
    return (
      <form onSubmit={this.props.formSubmit}>
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
        <Button name="Add User" disabled={this.inputsAreEmpty()} />
      </form>
    );
  }
}

export default Form;
