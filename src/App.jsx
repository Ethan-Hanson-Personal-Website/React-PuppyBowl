import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import { useState } from 'react'
import Navbar from './components/Navbar'
import SinglePlayer from './components/SinglePlayer';
import AllPlayers from './components/AllPlayers';
import NewPlayer from './components/NewPlayerForm';
import './App.css'

function App() {
 // const [user, setUser] = useState(null);

 return (
  <BrowserRouter>
    <div id="container">
      <Navbar/> 
      <div id='main-section'>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
          <Route path="/newplayer" element={<NewPlayer />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
}
export default App
