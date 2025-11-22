import type { Character } from "../../types/Character";
import "./Modal.css";

interface Props {
  character: Character | null;
  onClose: () => void;
}

export default function Modal({ character, onClose }: Props) {
  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <span>✖</span>
        </button>

        <img className="modal-img" src={character.image} alt={character.name} />

        <h2 className="modal-name">{character.name}</h2>

        <div className="tags">
          <span className="my-tag tag-blue"><b>Estado:</b> {character.status}</span>
          <span className="my-tag tag-purple"><b>Género:</b> {character.gender}</span>
          <span className="my-tag tag-green"><b>Especie:</b> {character.species}</span>
          <span className="my-tag tag-yellow"><b>Origen:</b> {character.origin?.name}</span>
          <span className="my-tag tag-orange"><b>Ubicación:</b> {character.location?.name}</span>
        </div>
      </div>
    </div>
  );
}