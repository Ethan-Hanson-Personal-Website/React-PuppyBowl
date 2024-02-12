import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import { useState } from 'react'
import Navbar from './components/Navbar'
import SinglePlayer from './components/SinglePlayer';
import AllPlayers from './components/AllPlayers';
import NewPlayer from './components/NewPlayerForm';
//import { useNavigate } from 'react-router-dom';
//import SearchPlayer from './components/SearchPlayer';
import './App.css'

function App() {
 // const [user, setUser] = useState(null);

 return (
  <BrowserRouter>
    <div id="container">
      <Navbar/> 
      <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/newplayer" element={<NewPlayer />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/players" element={<AllPlayers />} />
        </Routes>
      <div id='main-section'>
      </div>
    </div>
  </BrowserRouter>
);
}
export default App
