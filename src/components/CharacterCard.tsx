import type { Character } from "../types/Character";

interface Props {
  character: Character;
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
  onSelect: () => void;
}

export default function CharacterCard({ character, isFavorite, toggleFavorite, onSelect }: Props) {
  return (
    <div className="card my-card" onClick={onSelect} style={{cursor:"pointer"}}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={character.image} alt={character.name} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-5">{character.name}</p>

        <button
          className={`button is-small ${isFavorite ? "is-warning" : "is-primary"}`}
          onClick={(e) => { e.stopPropagation(); toggleFavorite(character.id); }}
        >
          {isFavorite ? "⭐ Favorito" : "☆ Agregar"}
        </button>
      </div>
    </div>
  );
}