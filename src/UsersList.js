import React, { Component } from "react";
import GamesCount from "./GamesCount";
import PropTypes from "prop-types";

class UsersList extends Component {
  static propTypes = {
    usersArray: PropTypes.array.isRequired,
  };
  state = {
    visible: true,
  };
  toggleVisibility = () => {
    this.state.visible
      ? this.setState({
          visible: false,
        })
      : this.setState({
          visible: true,
        });
  };
  render() {
    return (
      <div>
        <ol>
          {this.props.usersArray.map((user) => (
            <li key={user.id}>
              {user.userName}
              {this.state.visible ? (
                <span id="games-played">Games played: {user.gamesPlayed}</span>
              ) : (
                ""
              )}
            </li>
          ))}
        </ol>
        <GamesCount
          visibility={this.state.visible}
          toggleVisibility={this.toggleVisibility}
          usersArray={this.props.usersArray}
        />
      </div>
    );
  }
}

export default UsersList;
