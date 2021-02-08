import React from "react";

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

export default GamesCount;
