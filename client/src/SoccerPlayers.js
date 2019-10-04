import React from "react";
import DarkMode from "./hooks/useDarkMode";

export default function SoccerPlayer(props) {
  const [darkMode, setDarkMode] = DarkMode(false);
  const toggleDark = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button onClick={toggleDark}>Dark Mode</button>
      <div className="innerCard">
        {props.players.map(player => (
          <div className="playerCard" key={player.id}>
            <h1>{player.name}</h1>
            <p>{player.id + 1}</p>
            <h2>{player.country}</h2>
            <p>{player.searches}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
