interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
   <div className="field my-4" style={{ width: "50%"}}>
  <div className="control has-icons-left">
    <input
      className="input is-info"
      type="text"
      placeholder="Buscar personaje..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <span className="icon is-left">🔍</span>
  </div>
</div>
  );
}