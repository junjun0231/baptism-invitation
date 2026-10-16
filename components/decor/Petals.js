const PETALS = [
  { left: "8%", delay: 0, duration: 22, size: 16, opacity: 0.7 },
  { left: "22%", delay: 6, duration: 26, size: 12, opacity: 0.55 },
  { left: "38%", delay: 12, duration: 24, size: 15, opacity: 0.6 },
  { left: "55%", delay: 3, duration: 28, size: 11, opacity: 0.5 },
  { left: "70%", delay: 9, duration: 23, size: 17, opacity: 0.65 },
  { left: "84%", delay: 15, duration: 27, size: 13, opacity: 0.55 },
  { left: "94%", delay: 5, duration: 25, size: 14, opacity: 0.6 },
];

// A handful of cherry-blossom petals drifting slowly down the page.
export default function Petals({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      {PETALS.map((petal, i) => (
        <span
          key={i}
          className="absolute top-0 animate-fall will-change-transform"
          style={{
            left: petal.left,
            opacity: petal.opacity,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg viewBox="0 0 24 28" width={petal.size} height={petal.size * 1.17} focusable="false">
            <path
              d="M12 0 C 17 6, 22 12, 21 18 C 20 24, 15 28, 12 28 C 9 28, 4 24, 3 18 C 2 12, 7 6, 12 0 Z"
              fill="#F4B6C2"
            />
            <path
              d="M12 3 C 15 8, 18 13, 17 18 C 16 22, 13 25, 12 25 Z"
              fill="#FBE4E8"
              opacity="0.65"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
