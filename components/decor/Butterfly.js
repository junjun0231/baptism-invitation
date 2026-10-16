// A delicate rose-pink butterfly that floats and gently flaps its wings.
export default function Butterfly({ className = "", delay = 0, label }) {
  return (
    <span
      className={`pointer-events-none inline-block animate-flutter align-middle ${className}`}
      style={{ animationDelay: `${delay}s` }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
    >
      <svg viewBox="0 0 64 48" className="h-full w-full" focusable="false">
        <g
          className="animate-flap"
          style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay}s` }}
        >
          <g fill="#F4B6C2" stroke="#D9778A" strokeWidth="1" opacity="0.9">
            <ellipse cx="21" cy="17" rx="11" ry="9" transform="rotate(-25 21 17)" />
            <ellipse cx="21" cy="32" rx="8" ry="7" transform="rotate(22 21 32)" />
            <ellipse cx="43" cy="17" rx="11" ry="9" transform="rotate(25 43 17)" />
            <ellipse cx="43" cy="32" rx="8" ry="7" transform="rotate(-22 43 32)" />
          </g>
          <g fill="#FFF1F3" opacity="0.7">
            <ellipse cx="20" cy="15" rx="4" ry="3.4" transform="rotate(-25 20 15)" />
            <ellipse cx="44" cy="15" rx="4" ry="3.4" transform="rotate(25 44 15)" />
          </g>
        </g>
        <ellipse cx="32" cy="25" rx="1.8" ry="11" fill="#8B2F3A" opacity="0.8" />
        <path
          d="M32 15 C 29 9, 26 7, 24 6 M32 15 C 35 9, 38 7, 40 6"
          fill="none"
          stroke="#8B2F3A"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
