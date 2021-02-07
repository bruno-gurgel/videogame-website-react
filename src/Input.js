import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <input
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    ></input>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
