import Blossom from "./Blossom";

// An ornamental gold divider with a small blossom at its centre.
export default function Divider({ className = "" }) {
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

        <Blossom cx={118} cy={14} r={7} opacity={0.95} uid="divider-blossom" />

        <path d="M142 14 L138 10 L134 14 L138 18 Z" fill="#C9A24B" opacity="0.85" />
      </svg>
    </div>
  );
}
