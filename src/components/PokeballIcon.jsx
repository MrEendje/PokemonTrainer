function PokeballIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h7M15 12h7" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default PokeballIcon;
