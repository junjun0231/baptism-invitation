import Blossom from "./Blossom";

const LEAVES = [
  { x: 72, y: 68, deg: -30, s: 1 },
  { x: 106, y: 74, deg: 26, s: 0.9 },
  { x: 50, y: 98, deg: -68, s: 0.8 },
  { x: 120, y: 42, deg: 42, s: 0.75 },
];

const BLOSSOMS = [
  { cx: 46, cy: 52, r: 30, opacity: 0.95 },
  { cx: 96, cy: 40, r: 20, opacity: 0.9 },
  { cx: 34, cy: 104, r: 17, opacity: 0.85 },
  { cx: 92, cy: 92, r: 24, opacity: 0.92 },
  { cx: 140, cy: 70, r: 13, opacity: 0.8 },
  { cx: 118, cy: 110, r: 10, opacity: 0.75 },
];

function Leaf({ x, y, deg, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${deg}) scale(${s})`}>
      <path
        d="M0 0 C 15 -11, 34 -9, 44 0 C 34 9, 15 11, 0 0 Z"
        fill="url(#corner-leaf)"
        stroke="#6F9469"
        strokeWidth="0.8"
        opacity="0.9"
      />
      <g fill="none" stroke="#5E7F59" strokeWidth="0.5" opacity="0.6" strokeLinecap="round">
        <path d="M2 0 H41" />
        <path d="M12 -3 L19 -7 M12 3 L19 7" />
        <path d="M24 -3 L31 -6 M24 3 L31 6" />
      </g>
    </g>
  );
}

// A watercolor cherry-blossom cluster used to frame the corners.
export default function CornerFlowers({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="corner-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A9C4A3" />
          <stop offset="100%" stopColor="#6F9469" />
        </linearGradient>
      </defs>

      <g stroke="#7A5A3A" strokeLinecap="round" fill="none" opacity="0.5">
        <path d="M8 30 C 46 34, 84 54, 122 94" strokeWidth="3.6" />
        <path d="M122 94 C 140 106, 152 120, 158 136" strokeWidth="2.2" />
        <path d="M58 44 C 74 28, 94 22, 116 24" strokeWidth="2.4" />
        <path d="M34 78 C 40 62, 52 50, 66 44" strokeWidth="1.8" />
      </g>

      {LEAVES.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}

      <g fill="#F4B6C2" stroke="#D9778A" strokeWidth="0.6" opacity="0.85">
        <ellipse cx="154" cy="140" rx="5" ry="7" transform="rotate(28 154 140)" />
        <ellipse cx="122" cy="21" rx="4.5" ry="6.5" transform="rotate(-18 122 21)" />
      </g>

      {BLOSSOMS.map((blossom, i) => (
        <Blossom key={i} {...blossom} uid={`corner-${i}`} />
      ))}
    </svg>
  );
}
