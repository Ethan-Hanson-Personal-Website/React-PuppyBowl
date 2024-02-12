import { fetchPlayers } from "../API/index.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../API/index.js";
//import SinglePlayer from "./SinglePlayer";
import SearchPlayer from "./SearchPlayer";
import  "./Components.css";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const renderPlayers = async () => {
    try{
      const players = await fetchPlayers();
      setPlayers(players);
    }catch(error){
      console.error('Error fetching players:', error);
    }
  };
  const deleteSelectedPlayer = async (id) => {
    try {
      await deletePlayer(id);
      renderPlayers();
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  }

  useEffect(() => {
   
        renderPlayers();
  }, []); 

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-players">
      <SearchPlayer searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredPlayers.map(({ id, name, imageUrl }) => (
        <div key={id} className="player-card">
          <h4>{name}</h4>
          {imageUrl && (
            <div className="playerImgCont">
              <img className="player-image" src={imageUrl} alt={name} />
            </div>
          )}
           <button onClick={() => navigate(`/players/${id}`)} className="btn">See Details</button>
           <button onClick={() => deleteSelectedPlayer(id)} className="btn">Delete</button>  
     </div>
      ))}
    </div>
  );
}
