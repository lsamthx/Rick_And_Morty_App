import { useEffect, useState } from "react";
import type { Character } from "../types/Character";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";
import Modal from "../components/modal/Modal";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showFavorites, setShowFavorites] = useState(false); // nuevo estado

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const openModal = (char: Character) => setSelectedCharacter(char);
  const closeModal = () => setSelectedCharacter(null);

  // Fetch de personajes
  const fetchCharacters = async () => {
    if (showFavorites) {
      if (favorites.length === 0) {
        setCharacters([]);
        setTotalPages(1);
        return;
      }
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${favorites.join(",")}`
      );
      const data = await res.json();
      setCharacters(Array.isArray(data) ? data : [data]);
      setTotalPages(1);
    } else {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      } catch (err) {
        setCharacters([]);
        setTotalPages(1);
      }
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, search, favorites, showFavorites]);

  return (
    <div className="section">
      <div className="top-bar">
        <SearchBar value={search} onChange={setSearch} />
        <button
          className="favorites-btn"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "🏠 Ver Todos" : "⭐ Ver Favoritos"}
        </button>
      </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          next={() => setPage(page + 1)}
          prev={() => setPage(page - 1)}
          goToPage={(p) => setPage(p)}
        />

      <CharacterList
        characters={characters}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onSelect={openModal}
      />

      <Modal character={selectedCharacter} onClose={closeModal} />
    </div>
  );
}