function starPath(s) {
  const k = s * 0.16;
  return `M0 ${-s} C ${k} ${-k} ${k} ${-k} ${s} 0 C ${k} ${k} ${k} ${k} 0 ${s} C ${-k} ${k} ${-k} ${k} ${-s} 0 C ${-k} ${-k} ${-k} ${-k} 0 ${-s} Z`;
}

const poseClass = {
  hover: "",
  fly: "-rotate-6",
  perch: "rotate-6",
};

// A hand-drawn garden fairy: translucent layered wings, a soft glow and a
// trailing sparkle. She bobs gently while her wings shimmer.
export default function Fairy({ className = "", delay = 0, pose = "hover", flip = false, uid = "fairy" }) {
  return (
    <span
      className={`pointer-events-none inline-block animate-bob ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <span className={`block ${poseClass[pose] || ""} ${flip ? "-scale-x-100" : ""}`}>
        <svg viewBox="0 0 120 150" className="h-full w-full" focusable="false">
          <defs>
            <radialGradient id={`${uid}-glow`}>
              <stop offset="0%" stopColor="#FFF1F3" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#F4B6C2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F4B6C2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`${uid}-dress`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4B6C2" />
              <stop offset="100%" stopColor="#D9778A" />
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
            <g fill="#F4B6C2" stroke="#C9A24B" strokeWidth="0.8" opacity="0.5">
              <path d="M58 62 C 40 44, 20 34, 12 44 C 6 52, 22 66, 58 64 Z" />
              <path d="M58 66 C 44 78, 26 92, 34 104 C 40 113, 58 94, 60 74 Z" />
            </g>
            <g transform="translate(120 0) scale(-1 1)">
              <g fill="#F4B6C2" stroke="#C9A24B" strokeWidth="0.8" opacity="0.5">
                <path d="M58 62 C 40 44, 20 34, 12 44 C 6 52, 22 66, 58 64 Z" />
                <path d="M58 66 C 44 78, 26 92, 34 104 C 40 113, 58 94, 60 74 Z" />
              </g>
            </g>
            <g fill="#FFF1F3" opacity="0.55">
              <path d="M56 60 C 44 48, 30 42, 24 48 C 20 53, 32 62, 56 62 Z" />
              <path d="M56 60 C 44 48, 30 42, 24 48 C 20 53, 32 62, 56 62 Z" transform="translate(8 0)" />
            </g>
          </g>

          <path d="M56 64 C 50 66, 46 72, 45 78" fill="none" stroke="#F7DAD3" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M64 64 C 70 66, 74 72, 75 78" fill="none" stroke="#F7DAD3" strokeWidth="2.4" strokeLinecap="round" />

          <path
            d="M60 60 C 52 68, 48 84, 43 104 C 54 108, 66 108, 77 104 C 72 84, 68 68, 60 60 Z"
            fill={`url(#${uid}-dress)`}
          />
          <path d="M60 60 C 55 64, 55 72, 60 75 C 65 72, 65 64, 60 60 Z" fill="#FBE4E8" opacity="0.65" />

          <circle cx="60" cy="48" r="6" fill="#F7DAD3" />
          <path
            d="M53 47 C 52 39, 68 39, 67 47 C 70 50, 69 57, 68 61 C 67 54, 65 51, 60 51 C 55 51, 53 54, 52 61 C 51 57, 50 50, 53 47 Z"
            fill="#8B2F3A"
            opacity="0.85"
          />

          <path d="M75 78 L 85 63" stroke="#C9A24B" strokeWidth="1.4" strokeLinecap="round" />
          <path d={starPath(5)} transform="translate(86 60)" fill="#C9A24B" />

          <g fill="#C9A24B">
            <path d={starPath(4)} transform="translate(30 34)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 0.3}s` }} />
            <path d={starPath(3)} transform="translate(96 44)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 1.1}s` }} />
            <path d={starPath(3.5)} transform="translate(84 112)" className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${delay + 1.8}s` }} />
          </g>
        </svg>
      </span>
    </span>
  );
}
