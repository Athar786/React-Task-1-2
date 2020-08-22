import React, { Component } from "react";
import UserInput from './Task-1/UserInput';
import UserOutput from './Task-1/UserOutput';
import "./App.css";

class App1 extends Component {
  state = {
    username: ["Athar", "Marfatia"],
  };

  usernameEvent = (e) => {
    this.setState({
      username: [e.target.value, "Marfatia"],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameEvent}
          currentName={this.state.username[0]}
        />
        <UserOutput name={this.state.username[0]} />
        <UserOutput name={this.state.username[1]} />
      </div>
    );
  }
}

export default App1;