function starPath(s) {
  const k = s * 0.16;
  return `M0 ${-s} C ${k} ${-k} ${k} ${-k} ${s} 0 C ${k} ${k} ${k} ${k} 0 ${s} C ${-k} ${k} ${-k} ${k} ${-s} 0 C ${-k} ${-k} ${-k} ${-k} 0 ${-s} Z`;
}

const STARS = [
  { x: 18, y: 30, s: 5, delay: 0, color: "#C9A24B" },
  { x: 62, y: 12, s: 3.4, delay: 0.9, color: "#F4B6C2" },
  { x: 100, y: 42, s: 6, delay: 1.6, color: "#C9A24B" },
  { x: 34, y: 82, s: 4, delay: 0.5, color: "#D9778A" },
  { x: 82, y: 96, s: 5, delay: 2.1, color: "#C9A24B" },
  { x: 112, y: 78, s: 3, delay: 1.2, color: "#F4B6C2" },
];

// A scatter of twinkling star sparkles.
export default function Sparkles({ className = "", count = STARS.length }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" focusable="false">
      {STARS.slice(0, count).map((star, i) => (
        <path
          key={i}
          d={starPath(star.s)}
          transform={`translate(${star.x} ${star.y})`}
          fill={star.color}
          className="animate-twinkle"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}
