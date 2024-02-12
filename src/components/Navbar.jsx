import { Link } from 'react-router-dom';
import  "./Components.css";
import SearchPlayer from './SearchPlayer';

export default function Navbar() {
  return (
    <div className="nav">   
         <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/newplayer">Add Player</Link>
    </li>
  </ul>     
  <SearchPlayer />    
    </div>
  );
}