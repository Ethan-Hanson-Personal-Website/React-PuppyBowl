import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/singleplayer">Search Player</Link>
                    <Link to="/newplayer">Add Player</Link>
                </li>
            </ul>
        </nav>
    );
}