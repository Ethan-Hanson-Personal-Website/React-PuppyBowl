import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import { useState } from 'react'
import Navbar from './components/Navbar'
import SinglePlayer from './components/SinglePlayer';
import './App.css'
import AllPlayers from './components/AllPlayers';

function App() {
 // const [user, setUser] = useState(null);

 return (
  <BrowserRouter>
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
}
export default App
