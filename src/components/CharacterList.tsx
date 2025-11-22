import { useState } from "react";
import type { Character } from "../types/Character";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Character[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onSelect: (char: Character) => void;
}

export default function CharacterList({ characters, favorites, toggleFavorite, onSelect }: Props) {
  const columnsPerRow = 4;
  const rowsPerPage = 5;
  const elementsPerPage = columnsPerRow * rowsPerPage;

  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * elementsPerPage;
  const end = start + elementsPerPage;

  const pageCharacters = characters.slice(start, end);

  const placeholdersCount = elementsPerPage - pageCharacters.length;

  const emptyCharacter: Character = {
    id: -1,
    name: "",
    image: "",
    status: "",
    species: "",
    gender: "",
    origin: { name: "" },
    location: { name: "" },
  };

  const displayArray = [...pageCharacters];
  for (let i = 0; i < placeholdersCount; i++) displayArray.push(emptyCharacter);

  return (
    <div className="columns is-multiline" style={{ marginTop: "30px" }}>
      {displayArray.map((ch, idx) =>
        ch.id === -1 ? (
          <div key={`placeholder-${idx}`} className="column is-3">
            <div style={{ visibility: "hidden" }}>
              <CharacterCard character={ch} isFavorite={false} toggleFavorite={() => {}} onSelect={() => {}} />
            </div>
          </div>
        ) : (
          <div key={ch.id} className="column is-3">
            <CharacterCard character={ch} isFavorite={favorites.includes(ch.id)} toggleFavorite={toggleFavorite} onSelect={() => onSelect(ch)} />
          </div>
        )
      )}
    </div>
  );
}