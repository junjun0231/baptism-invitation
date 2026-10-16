// A single realistic watercolor cherry blossom. Renders as a <g> so it can be
// placed inside larger SVG scenes, with <BlossomIcon> for standalone corners.
const PETAL_ANGLES = [0, 72, 144, 216, 288];
const STAMEN_ANGLES = [-62, -40, -20, 0, 20, 40, 62];

function rotate(x, y, deg) {
  const a = (deg * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [x * c - y * s, x * s + y * c];
}

function round(n) {
  return Math.round(n * 100) / 100;
}

// One petal with a soft notched (cleft) tip, rotated into place.
function petalPath(r, deg) {
  const shape = [
    [0, -0.15],
    [-0.42, -0.3], [-0.62, -0.66], [-0.34, -0.94],
    [-0.2, -1.12], [-0.06, -1.06], [0, -0.9],
    [0.06, -1.06], [0.2, -1.12], [0.34, -0.94],
    [0.62, -0.66], [0.42, -0.3], [0, -0.15],
  ];
  const p = shape.map(([x, y]) => rotate(x * r, y * r, deg).map(round));
  let d = `M${p[0][0]} ${p[0][1]}`;
  for (let i = 1; i < p.length; i += 3) {
    d += ` C${p[i][0]} ${p[i][1]} ${p[i + 1][0]} ${p[i + 1][1]} ${p[i + 2][0]} ${p[i + 2][1]}`;
  }
  return `${d} Z`;
}

function veinPath(r, deg) {
  const a = rotate(0, -0.18 * r, deg).map(round);
  const b = rotate(0, -0.82 * r, deg).map(round);
  return `M${a[0]} ${a[1]} L${b[0]} ${b[1]}`;
}

function stamen(r, deg) {
  const [x, y] = rotate(0, -0.34 * r, deg).map(round);
  return { x, y };
}

export default function Blossom({ cx = 0, cy = 0, r = 24, opacity = 0.9, uid = "blossom" }) {
  const fill = `${uid}-fill`;

  return (
    <g transform={`translate(${cx} ${cy})`} opacity={opacity}>
      <defs>
        <radialGradient id={fill} gradientUnits="userSpaceOnUse" cx="0" cy="0" r={round(r * 1.2)}>
          <stop offset="0%" stopColor="#D9778A" />
          <stop offset="30%" stopColor="#F4B6C2" />
          <stop offset="68%" stopColor="#FBE4E8" />
          <stop offset="100%" stopColor="#FFF6F7" />
        </radialGradient>
      </defs>

      <g fill={`url(#${fill})`} stroke="#E79AA8" strokeWidth="0.6" strokeLinejoin="round">
        {PETAL_ANGLES.map((deg) => (
          <path key={deg} d={petalPath(r, deg)} />
        ))}
      </g>

      <g fill="none" stroke="#E79AA8" strokeWidth="0.5" strokeLinecap="round" opacity="0.45">
        {PETAL_ANGLES.map((deg) => (
          <path key={deg} d={veinPath(r, deg)} />
        ))}
      </g>

      <g fill="none" stroke="#C9A24B" strokeWidth="0.6" strokeLinecap="round" opacity="0.85">
        {STAMEN_ANGLES.map((deg) => {
          const s = stamen(r, deg);
          return <path key={deg} d={`M0 ${round(-0.04 * r)} L${s.x} ${s.y}`} />;
        })}
      </g>
      <g fill="#C9A24B" opacity="0.9">
        {STAMEN_ANGLES.map((deg) => {
          const s = stamen(r, deg);
          return <circle key={deg} cx={s.x} cy={s.y} r={round(r * 0.045)} />;
        })}
      </g>

      <circle r={round(r * 0.12)} fill="#C9A24B" opacity="0.9" />
      <circle r={round(r * 0.06)} fill="#FFF1F3" opacity="0.7" />
    </g>
  );
}

// Standalone blossom for absolutely-positioned accents (photo / list frames).
export function BlossomIcon({ className = "", uid = "blossom", r = 20, opacity = 0.92 }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <Blossom cx={24} cy={24} r={r} opacity={opacity} uid={uid} />
    </svg>
  );
}
