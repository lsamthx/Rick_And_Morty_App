import { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterContext";
import CharacterCard from "./CharacterCard";
import type { Character } from "../types/Character";

export default function CharacterList() {
  const { characters } = useContext(CharacterContext);

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
              <CharacterCard character={ch} />
            </div>
          </div>
        ) : (
          <div key={ch.id} className="column is-3">
            <CharacterCard character={ch} />
          </div>
        )
      )}
    </div>
  );
}
