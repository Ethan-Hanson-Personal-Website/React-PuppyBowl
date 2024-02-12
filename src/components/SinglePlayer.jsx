import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//import AllPlayers from "./AllPlayers.jsx";
import  "./Components.css";
import { fetchSinglePlayer } from "../API/index.js";


export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayer = async () => {
      try{
        const response = await fetchSinglePlayer(id);
        setPlayer(response.data.player);
      }catch(err){
        console.error(err);
      }
    };
        getPlayer();
  }, [id]); 

  if (!player) {
    return null;
  }

  return (
    <div className="all-players">
      <div key={player.id} className="player-card">
        <h4>{player.name}</h4>
        <p>{player.breed}</p>
        <p>{player.status}</p>
        {player.imageUrl && (
          <div className="playerImgCont">
            <img className="player-image" src={player.imageUrl} alt={player.name} />
          </div>
        )}
           <button onClick={() => navigate(`/players`)} className="btn">Home</button>   
     </div>
    </div>
      
  );
}


