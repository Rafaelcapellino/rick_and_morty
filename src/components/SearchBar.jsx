import s from "../styles/SearchBar.module.css";
import lupa from "../assets/lupablanca.png";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");
  
  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  
  return (
    <div>
      <input
        value={character}
        onChange={handleChange}
        placeholder="Search character"
        type="search"
      />
      <button onClick={() => onSearch(character)}>
        <img src={lupa} style={{ width: "15px" }} />
      </button>
    </div>
  );
}
