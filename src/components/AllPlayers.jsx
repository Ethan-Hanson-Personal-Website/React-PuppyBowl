import { fetchPlayers } from "../API/index.js";
import { useEffect, useState } from "react";

export default function AllPlayers() {

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetchPlayers()
      .then(data => setPlayers(data.data.players))
      .catch(error => console.error(error));
  }, []); 

  return (
    <div className="all-players">
      {players && players.map(({ id, name, imageUrl }) => (
        <div key={id} className="player-card">
          <h4>{name}</h4>
          {imageUrl && <img src={imageUrl} alt={name} />}
        </div>
      ))}
    </div>
  );
}