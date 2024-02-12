import { fetchPlayers } from "../API/index.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";
import  "./Components.css";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-players">
      {filteredPlayers.map(({ id, name, imageUrl }) => (
        <div key={id} className="player-card">
          <h4>{name}</h4>
          {imageUrl && (
            <div className="playerImgCont">
              <img className="player-image" src={imageUrl} alt={name} />
            </div>
          )}
           <button onClick={() => navigate(`/players/${id}`)} className="btn">See Details</button>   
     </div>
      ))}
    </div>
  );
}
