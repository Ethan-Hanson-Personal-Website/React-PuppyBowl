import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AllPlayers from "./AllPlayers.jsx";
import  "./Components.css";
import { fetchSinglePlayer } from "../API/index.js";


export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayer = async () => {
      try{
        const data = await fetchSinglePlayer(id);
        setPlayer(data);
      }catch(err){
        console.error(err);
      }
    };
        getPlayer();
  }, [id]); 

  if (!player) {
    return null;
  }


  const { id: playerId, name, imageUrl, breed, status } = player;
  return (
    <div className="Player">
    <div key={playerId} className="player-card">
      <h4>{name}</h4>
      <p>{breed}</p>
      <p>{status}</p>
      {imageUrl && (
        <div className="playerImgCont">
          <img className="player-image" src={imageUrl} alt={name} />
        </div>
      )}
          <button onClick={() => navigate('/')} className="btn">Back Home</button>
        </div>
      
    </div>
  );
}


