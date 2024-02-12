import { fetchPlayers } from "../API/index.js";
import { useEffect, useState } from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    const renderPlayers = async () => {
      try{
        const players = await fetchPlayers();
        setPlayers(players);
      }catch(error){
        console.error('Error fetching players:', error);
      }
    };
        renderPlayers();
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