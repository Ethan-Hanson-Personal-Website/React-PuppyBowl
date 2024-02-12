import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPlayer({ searchTerm, setSearchTerm }) {
    const handleSearch = (event) => {
      event.preventDefault();
      setSearchTerm(event.target.value);
    };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search player"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}