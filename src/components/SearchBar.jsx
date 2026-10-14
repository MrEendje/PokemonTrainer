function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Zoek op naam of nummer..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
