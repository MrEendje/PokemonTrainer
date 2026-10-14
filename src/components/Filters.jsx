import { types, generations } from "../data/filters";

function Filters({
  selectedType,
  onTypeChange,
  selectedGen,
  onGenChange,
  onlyFavorites,
  onOnlyFavoritesChange,
}) {
  return (
    <aside className="filters">
      <h2>Filters</h2>
      <p className="filter-label">Type</p>
      <div className="type-buttons">
        {types.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "type-button active" : "type-button"}
            onClick={() => onTypeChange(selectedType === type ? "" : type)}
          >
            {type}
          </button>
        ))}
      </div>
      <p className="filter-label">Generatie</p>
      <select
        className="gen-select"
        value={selectedGen}
        onChange={(e) => onGenChange(e.target.value)}
      >
        <option value="">Alle generaties</option>
        {generations.map((gen, index) => (
          <option key={gen.name} value={index}>
            {gen.name}
          </option>
        ))}
      </select>

      <label className="fav-filter">
        <input
          type="checkbox"
          checked={onlyFavorites}
          onChange={(e) => onOnlyFavoritesChange(e.target.checked)}
        />
        Alleen favorieten
      </label>
    </aside>
  );
}

export default Filters;
