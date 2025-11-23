import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

export default function SearchBar() {
  const { search, setSearch } = useContext(CharacterContext);

  return (
    <div className="field my-4" style={{ width: "50%" }}>
      <div className="control has-icons-left">
        <input
          className="input is-info"
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="icon is-left">🔍</span>
      </div>
    </div>
  );
}
