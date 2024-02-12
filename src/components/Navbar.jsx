import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">      
         <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/singleplayer">Search Player</Link>
    </li>
    <li>
      <Link to="/newplayer">Add Player</Link>
    </li>
  </ul>      
    </div>
  );
}