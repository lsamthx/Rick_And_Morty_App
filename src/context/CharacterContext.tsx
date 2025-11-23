import { createContext, useState, useEffect} from "react";
import type { ReactNode } from "react";
import type { Character } from "../types/Character";

interface CharacterContextProps {
  characters: Character[];
  selectedCharacter: Character | null;
  favorites: number[];
  page: number;
  totalPages: number;
  search: string;
  showFavorites: boolean;

  setPage: (p: number) => void;
  setSearch: (v: string) => void;
  setShowFavorites: (v: boolean) => void;

  toggleFavorite: (id: number) => void;
  selectCharacter: (c: Character) => void;
  closeModal: () => void;
}

export const CharacterContext = createContext<CharacterContextProps>(
  {} as CharacterContextProps
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const selectCharacter = (c: Character) => setSelectedCharacter(c);
  const closeModal = () => setSelectedCharacter(null);

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
      return;
    }

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
      );
      const data = await res.json();

      setCharacters(data.results || []);
      setTotalPages(data.info?.pages || 1);
    } catch {
      setCharacters([]);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, search, favorites, showFavorites]);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectedCharacter,
        favorites,
        page,
        totalPages,
        search,
        showFavorites,

        setPage,
        setSearch,
        setShowFavorites,

        toggleFavorite,
        selectCharacter,
        closeModal,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};