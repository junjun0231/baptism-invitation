function Blossom({ cx, cy, r, opacity = 0.9 }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${cx} ${cy})`} opacity={opacity}>
      {petals.map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy={-r * 0.62}
          rx={r * 0.42}
          ry={r * 0.62}
          fill="#F4B6C2"
          transform={`rotate(${angle})`}
        />
      ))}
      {petals.map((angle) => (
        <ellipse
          key={`hi-${angle}`}
          cx="0"
          cy={-r * 0.5}
          rx={r * 0.16}
          ry={r * 0.32}
          fill="#FBE4E8"
          opacity="0.75"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r={r * 0.17} fill="#C9A24B" opacity="0.85" />
    </g>
  );
}

// A watercolor cherry-blossom cluster used to frame the corners.
export default function CornerFlowers({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="#8FAE8B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M14 40 C 60 44, 96 62, 128 96" />
        <path d="M60 46 C 74 30, 92 24, 112 26" />
      </g>

      <g fill="#8FAE8B" opacity="0.6">
        <ellipse cx="70" cy="66" rx="13" ry="6" transform="rotate(-32 70 66)" />
        <ellipse cx="104" cy="72" rx="11" ry="5" transform="rotate(24 104 72)" />
      </g>

      <Blossom cx="46" cy="52" r="30" opacity="0.92" />
      <Blossom cx="96" cy="40" r="20" opacity="0.85" />
      <Blossom cx="34" cy="104" r="17" opacity="0.8" />
      <Blossom cx="92" cy="92" r="24" opacity="0.9" />
      <Blossom cx="140" cy="70" r="13" opacity="0.75" />
    </svg>
  );
}
