function starPath(s) {
  const k = s * 0.16;
  return `M0 ${-s} C ${k} ${-k} ${k} ${-k} ${s} 0 C ${k} ${k} ${k} ${k} 0 ${s} C ${-k} ${k} ${-k} ${k} ${-s} 0 C ${-k} ${-k} ${-k} ${-k} 0 ${-s} Z`;
}

const poseClass = {
  hover: "",
  fly: "-rotate-6",
  perch: "rotate-6",
};

// A hand-drawn garden fairy: layered translucent wings with veins, a flowing
// gown, delicate arms and a soft face framed by loose hair. She bobs gently
// while her wings shimmer.
export default function Fairy({ className = "", delay = 0, pose = "hover", flip = false, uid = "fairy", fly = false }) {
  const wing = (
    <g stroke="#C9A24B" strokeWidth="0.8" strokeLinejoin="round" strokeLinecap="round">
      <g fill={`url(#${uid}-wing)`} opacity="0.85">
        <path d="M60 60 C 45 41, 25 29, 13 35 C 2 40 7 53 22 60 C 34 66 49 66 60 63 Z" />
        <path d="M60 64 C 46 76, 27 87, 31 101 C 34 112 50 100 60 78 Z" />
      </g>
      <g fill="#FFF6F7" opacity="0.5">
        <path d="M58 58 C 46 45, 30 36, 20 39 C 12 42 16 51 28 57 C 40 62 52 62 58 61 Z" />
      </g>
      <g fill="none" stroke="#E79AA8" strokeWidth="0.6" opacity="0.6">
        <path d="M60 62 C 48 50, 34 42, 20 40" />
        <path d="M60 62 C 47 55, 33 51, 18 52" />
        <path d="M60 63 C 47 61, 34 61, 23 60" />
        <path d="M60 68 C 51 78, 40 88, 34 96" />
        <path d="M60 68 C 52 82, 44 92, 40 100" />
      </g>
    </g>
  );

  return (
    <span
      className={`pointer-events-none inline-block ${fly ? "animate-fly" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <span className="block animate-bob" style={{ animationDelay: `${delay}s` }}>
        <svg
          viewBox="0 0 120 150"
          className={`h-full w-full ${poseClass[pose] || ""} ${flip ? "-scale-x-100" : ""}`}
          focusable="false"
        >
          <defs>
            <radialGradient id={`${uid}-glow`}>
              <stop offset="0%" stopColor="#FFF1F3" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#F4B6C2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F4B6C2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${uid}-dress`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF6F7" />
              <stop offset="45%" stopColor="#F4B6C2" />
              <stop offset="100%" stopColor="#D9778A" />
            </linearGradient>
            <linearGradient id={`${uid}-wing`} x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF6F7" stopOpacity="0.92" />
              <stop offset="55%" stopColor="#F4B6C2" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#D9778A" stopOpacity="0.72" />
            </linearGradient>
            <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A0404C" />
              <stop offset="100%" stopColor="#6E222C" />
            </linearGradient>
          </defs>

          <circle
            cx="60"
            cy="74"
            r="52"
            fill={`url(#${uid}-glow)`}
            className="animate-twinkle"
            style={{ transformBox: "fill-box", transformOrigin: "center", animationDuration: "4.5s" }}
          />

          <g
            className="animate-wing"
            style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay}s` }}
          >
            {wing}
            <g transform="translate(120 0) scale(-1 1)">{wing}</g>
          </g>

          <path d="M56 63 C 50 66, 45 72, 44 79" fill="none" stroke="#F7DAD3" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M64 63 C 70 66, 75 72, 76 78" fill="none" stroke="#F7DAD3" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="44" cy="80" r="1.9" fill="#F7DAD3" />
          <circle cx="76" cy="79" r="1.9" fill="#F7DAD3" />

          <path
            d="M56 62 C 50 74, 44 92, 40 110 C 54 115 66 115 80 110 C 76 92 70 74 64 62 Z"
            fill={`url(#${uid}-dress)`}
          />
          <g fill="none" stroke="#D9778A" strokeWidth="0.6" opacity="0.4">
            <path d="M60 65 C 60 81, 59 97, 58 112" />
            <path d="M53 71 C 51 87, 48 101, 46 108" />
            <path d="M67 71 C 69 87, 72 101, 74 108" />
          </g>
          <path d="M56 60 C 54 64, 54 70, 60 74 C 66 70, 66 64, 64 60 Z" fill="#FFF6F7" opacity="0.7" />
          <path d="M52 62 C 56 60, 64 60, 68 62" fill="none" stroke="#C9A24B" strokeWidth="0.6" opacity="0.5" />

          <circle cx="60" cy="49" r="6.2" fill="#F7DAD3" />
          <path
            d="M52 48 C 51 39, 56 33, 60 33 C 64 33, 69 39, 68 48 C 68 51 67 55 66 58 C 65 53 64 50 62 49 C 61 52 59 53 58 50 C 56 51 55 54 54 58 C 53 55 52 51 52 48 Z"
            fill={`url(#${uid}-hair)`}
            opacity="0.94"
          />
          <g fill="none" stroke="#7E2A34" strokeWidth="0.5" opacity="0.5" strokeLinecap="round">
            <path d="M54.5 43 C 52.8 47, 52.8 52, 53 56" />
            <path d="M65.5 43 C 67.2 47, 67.2 52, 67 56" />
          </g>
          <g fill="#5F1D25" opacity="0.75">
            <circle cx="57.9" cy="48.8" r="0.7" />
            <circle cx="62.1" cy="48.8" r="0.7" />
          </g>
          <path d="M58.7 51.2 C 59.5 51.9, 60.5 51.9, 61.3 51.2" fill="none" stroke="#B14A5B" strokeWidth="0.5" strokeLinecap="round" opacity="0.7" />
          <g fill="#E79AA8" opacity="0.35">
            <circle cx="56.7" cy="50.4" r="1.1" />
            <circle cx="63.3" cy="50.4" r="1.1" />
          </g>
          <g transform="translate(52 40)">
            <g fill="#F4B6C2" stroke="#E79AA8" strokeWidth="0.4">
              <circle cx="0" cy="-1.6" r="1.2" />
              <circle cx="1.6" cy="0.6" r="1.1" />
              <circle cx="-1.6" cy="0.6" r="1.1" />
            </g>
            <circle r="0.7" fill="#C9A24B" />
          </g>

          <path d="M76 78 L 86 62" stroke="#C9A24B" strokeWidth="1.4" strokeLinecap="round" />
          <path d={starPath(5)} transform="translate(87 59)" fill="#C9A24B" />

          <g fill="#C9A24B">
            <path d={starPath(4)} transform="translate(30 34)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 0.3}s` }} />
            <path d={starPath(3)} transform="translate(96 44)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 1.1}s` }} />
            <path d={starPath(3.5)} transform="translate(84 112)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 1.8}s` }} />
            <path d={starPath(2.5)} transform="translate(38 120)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 2.4}s` }} />
          </g>
        </svg>
      </span>
    </span>
  );
}
