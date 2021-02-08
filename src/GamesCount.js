import React from "react";
import PropTypes from "prop-types";

function GamesCount(props) {
  return (
    <button
      className="smallButton"
      onClick={props.toggleVisibility}
      disabled={props.usersArray.length === 0}
    >
      {props.visibility ? "Hide games played" : "Show games played"}
    </button>
  );
}

GamesCount.propTypes = {
  visibility: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  usersArray: PropTypes.array.isRequired,
};

export default GamesCount;
