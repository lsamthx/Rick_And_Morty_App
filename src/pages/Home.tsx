import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";
import Modal from "../components/modal/Modal";

export default function Home() {
  const {
    showFavorites,
    setShowFavorites,
  } = useContext(CharacterContext);

  return (
    <div className="section">
      <div className="top-bar">
        <SearchBar />
        <button
          className="favorites-btn"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "🏠 Ver Todos" : "⭐ Ver Favoritos"}
        </button>
      </div>

      <Pagination />

      <CharacterList />

      <Modal />
    </div>
  );
}
