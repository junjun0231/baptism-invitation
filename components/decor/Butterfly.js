// A delicate rose-pink butterfly that floats, flies and gently flaps its wings.
export default function Butterfly({ className = "", delay = 0, label, uid = "butterfly", fly = false }) {
  const fore = `${uid}-fore`;
  const hind = `${uid}-hind`;
  const body = `${uid}-body`;
  const sheen = `${uid}-sheen`;

  const wing = (
    <g>
      <g stroke="#B14A5B" strokeWidth="0.7" strokeLinejoin="round">
        <path
          d="M31 20 C 25 12 16 7 9 7 C 4 7 3 13 6 19 C 8 23 12 26 18 26 C 24 26.5 28 26 31 25 Z"
          fill={`url(#${fore})`}
        />
        <path
          d="M30 25 C 22 26 14 28 10 33 C 6 37 6 42 11 43.5 C 14 45 15 46.5 16.5 46.5 C 18.5 46.5 20.5 44 23 41 C 26.5 38 30 33.5 31 30 Z"
          fill={`url(#${hind})`}
        />
      </g>

      <g fill={`url(#${sheen})`} opacity="0.55">
        <ellipse cx="22" cy="17" rx="11" ry="8" />
        <ellipse cx="22" cy="33" rx="9" ry="7" />
      </g>

      <g fill="none" stroke="#C9647A" strokeWidth="1.8" strokeLinecap="round" opacity="0.35">
        <path d="M9 7 C 4 7 3 13 6 19 C 8 23 12 26 18 26" />
        <path d="M10 33 C 6 37 6 42 11 43.5 C 14 45 15 46.5 16.5 46.5 C 18.5 46.5 20.5 44 23 41" />
      </g>

      <g fill="none" stroke="#A94A5C" strokeWidth="0.5" strokeLinecap="round" opacity="0.6">
        <path d="M30 21 C 24 16 17 11 10 8" />
        <path d="M30 22 C 22 18 14 17 8 18" />
        <path d="M30 24 C 22 25 15 26 10 26" />
        <path d="M18 15 C 16 18 14.5 20 13.5 22" />
        <path d="M30 28 C 24 31 18 34 12 36" />
        <path d="M30 29 C 24 34 19 39 15 43" />
      </g>

      <g fill="#FFF1F3" opacity="0.9">
        <circle cx="11" cy="11.5" r="1.2" />
        <circle cx="8.6" cy="15.5" r="1.1" />
        <circle cx="9.5" cy="19.5" r="1.1" />
        <circle cx="13" cy="23" r="1" />
      </g>

      <g fill="#C9A24B" opacity="0.85">
        <circle cx="9.4" cy="8.6" r="0.7" />
        <circle cx="12.4" cy="7.6" r="0.6" />
        <circle cx="7" cy="11.4" r="0.6" />
      </g>

      <g>
        <circle cx="15" cy="38" r="3" fill="#C9647A" opacity="0.45" />
        <circle cx="15" cy="38" r="1.9" fill="#FFF1F3" opacity="0.9" />
        <circle cx="15" cy="38" r="0.9" fill="#8B2F3A" />
      </g>

      <ellipse cx="13" cy="13" rx="2.4" ry="1.5" transform="rotate(-30 13 13)" fill="#FFF6F7" opacity="0.6" />
    </g>
  );

  return (
    <span
      className={`pointer-events-none inline-block align-middle ${fly ? "animate-fly" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
    >
      <svg
        viewBox="0 0 64 48"
        className="h-full w-full animate-flutter"
        style={{ animationDelay: `${delay}s` }}
        focusable="false"
      >
        <defs>
          <linearGradient id={fore} x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FFF1F3" />
            <stop offset="45%" stopColor="#F4B6C2" />
            <stop offset="100%" stopColor="#D9778A" />
          </linearGradient>
          <linearGradient id={hind} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4B6C2" />
            <stop offset="60%" stopColor="#E79AA8" />
            <stop offset="100%" stopColor="#C9647A" />
          </linearGradient>
          <linearGradient id={body} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B2F3A" />
            <stop offset="100%" stopColor="#5F1D25" />
          </linearGradient>
          <radialGradient id={sheen} cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#FFF6F7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFF6F7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g
          className="animate-flap"
          style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay}s` }}
        >
          {wing}
          <g transform="translate(64 0) scale(-1 1)">{wing}</g>
        </g>

        <g fill={`url(#${body})`}>
          <circle cx="32" cy="15.5" r="2.1" />
          <ellipse cx="32" cy="21.5" rx="2.4" ry="3.8" />
          <ellipse cx="32" cy="30" rx="1.8" ry="6.8" />
        </g>
        <g fill="#3A1218" opacity="0.8">
          <ellipse cx="30.9" cy="15.3" rx="0.65" ry="0.85" />
          <ellipse cx="33.1" cy="15.3" rx="0.65" ry="0.85" />
        </g>
        <g stroke="#F7DAD3" strokeWidth="0.5" opacity="0.5">
          <path d="M30.4 26.5 H33.6" />
          <path d="M30.3 29 H33.7" />
          <path d="M30.3 31.5 H33.7" />
          <path d="M30.5 34 H33.5" />
        </g>
        <g fill="none" stroke="#5F1D25" strokeWidth="0.5" strokeLinecap="round" opacity="0.6">
          <path d="M30 23 C 28.6 25 27.9 26.6 27.2 28.2" />
          <path d="M30.6 24 C 29.4 26 28.8 27.6 28.3 29.2" />
          <path d="M34 23 C 35.4 25 36.1 26.6 36.8 28.2" />
          <path d="M33.4 24 C 34.6 26 35.2 27.6 35.7 29.2" />
        </g>

        <g fill="none" stroke="#8B2F3A" strokeWidth="0.9" strokeLinecap="round">
          <path d="M31.4 15 C 28.8 9.6 25.8 7 22.4 5.8" />
          <path d="M32.6 15 C 35.2 9.6 38.2 7 41.6 5.8" />
        </g>
        <g fill="#8B2F3A">
          <circle cx="22.4" cy="5.8" r="1.1" />
          <circle cx="41.6" cy="5.8" r="1.1" />
        </g>
      </svg>
    </span>
  );
}
