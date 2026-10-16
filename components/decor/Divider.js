// An ornamental gold divider with a small blossom at its centre.
export default function Divider({ className = "" }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 260 28" className="h-6 w-56 sm:w-64" focusable="false">
        <defs>
          <linearGradient id="divider-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A24B" stopOpacity="0" />
            <stop offset="100%" stopColor="#C9A24B" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <line x1="4" y1="14" x2="98" y2="14" stroke="url(#divider-fade)" strokeWidth="1" />
        <line
          x1="256"
          y1="14"
          x2="162"
          y2="14"
          stroke="url(#divider-fade)"
          strokeWidth="1"
        />

        <path d="M126 14 L130 10 L134 14 L130 18 Z" fill="#C9A24B" opacity="0.85" />

        <g transform="translate(118 14)">
          <g fill="#F4B6C2" opacity="0.9">
            {petals.map((angle) => (
              <ellipse
                key={angle}
                cx="0"
                cy="-4"
                rx="2"
                ry="3.2"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
          <circle r="1.2" fill="#C9A24B" />
        </g>

        <path d="M142 14 L138 10 L134 14 L138 18 Z" fill="#C9A24B" opacity="0.85" />
      </svg>
    </div>
  );
}
