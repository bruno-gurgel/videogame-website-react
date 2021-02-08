import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <button onClick={props.deleteLastUser} disabled={props.disabled}>
        {props.name}
      </button>
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  deleteLastUser: PropTypes.func,
};

export default Button;
