import React, { Component } from "react";
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

function SoccerPlayer(props) {
  return (
    <div>
      {props.players.map(player => (
        <div>
          <h1>{`Player Name: ${player.name}`}</h1>
          <p>{`Country: ${player.country}`}</p>
          <p>{`Number of Internet Searches: ${player.searches}`}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
