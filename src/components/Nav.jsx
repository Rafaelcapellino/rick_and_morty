import SearchBar from "./SearchBar.jsx";
import s from "../styles/Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
