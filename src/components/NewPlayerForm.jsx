import { useState } from 'react';
import { createPlayer } from "../API/index.js";
import  "./Components.css";
import { useNavigate } from "react-router-dom";


export default function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const playerData = { name, breed, status, imageUrl };
      const newPlayer = await createPlayer(playerData);
      console.log('New player created:', newPlayer);
      navigate('/');
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };

  return (
    <div>
      <h1>New Player Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}