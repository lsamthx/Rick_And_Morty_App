import { useContext } from "react";
import type { Character } from "../types/Character";
import { CharacterContext } from "../context/CharacterContext";

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  const { favorites, toggleFavorite, selectCharacter } = useContext(CharacterContext);

  const isFavorite = favorites.includes(character.id);

  return (
    <div
      className="card my-card"
      onClick={() => selectCharacter(character)}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={character.image} alt={character.name} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-5">{character.name}</p>

        <button
          className={`button is-small ${isFavorite ? "is-warning" : "is-primary"}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(character.id);
          }}
        >
          {isFavorite ? "⭐ Favorito" : "☆ Agregar"}
        </button>
      </div>
    </div>
  );
}
