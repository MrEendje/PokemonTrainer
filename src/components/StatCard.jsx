function StatCard({ label, value, text }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-text">{text}</p>
    </div>
  );
}

export default StatCard;
