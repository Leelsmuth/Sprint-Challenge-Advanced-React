import React, { Component } from "react";
import SoccerPlayer from "./SoccerPlayers";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      this.setState({ players: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <SoccerPlayer players={this.state.players} />
      </div>
    );
  }
}

export default App;
