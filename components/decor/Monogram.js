import Blossom from "./Blossom";

// A small ornate monogram crest with a script initial.
export default function Monogram({ className = "", letter = "O", label }) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" focusable="false">
        <circle cx="50" cy="50" r="37" fill="none" stroke="#C9A24B" strokeWidth="1" opacity="0.85" />
        <circle cx="50" cy="50" r="43" fill="none" stroke="#C9A24B" strokeWidth="0.5" opacity="0.45" />

        <Blossom cx={50} cy={14} r={7} opacity={0.92} uid="monogram-top" />
        <Blossom cx={50} cy={86} r={7} opacity={0.92} uid="monogram-bottom" />

        <path d="M8 50 L12 46 L16 50 L12 54 Z" fill="#C9A24B" opacity="0.8" />
        <path d="M92 50 L88 46 L84 50 L88 54 Z" fill="#C9A24B" opacity="0.8" />
      </svg>
      <span
        className="relative font-script leading-none text-burgundy"
        style={{ fontSize: "0.62em" }}
      >
        {letter}
      </span>
    </span>
  );
}
