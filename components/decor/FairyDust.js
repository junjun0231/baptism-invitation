const MOTES = [
  { left: "6%", bottom: "12%", size: 4, delay: 0, duration: 15, color: "#C9A24B" },
  { left: "14%", bottom: "28%", size: 3, delay: 4, duration: 18, color: "#F4B6C2" },
  { left: "23%", bottom: "8%", size: 5, delay: 8, duration: 16, color: "#C9A24B" },
  { left: "31%", bottom: "40%", size: 3, delay: 2, duration: 20, color: "#FFF1F3" },
  { left: "42%", bottom: "18%", size: 4, delay: 11, duration: 17, color: "#F4B6C2" },
  { left: "52%", bottom: "34%", size: 3, delay: 6, duration: 19, color: "#C9A24B" },
  { left: "62%", bottom: "10%", size: 4, delay: 13, duration: 15, color: "#FFF1F3" },
  { left: "71%", bottom: "44%", size: 3, delay: 1, duration: 21, color: "#F4B6C2" },
  { left: "80%", bottom: "20%", size: 5, delay: 9, duration: 16, color: "#C9A24B" },
  { left: "90%", bottom: "36%", size: 3, delay: 5, duration: 18, color: "#FFF1F3" },
  { left: "96%", bottom: "14%", size: 4, delay: 15, duration: 17, color: "#F4B6C2" },
  { left: "37%", bottom: "56%", size: 3, delay: 7, duration: 22, color: "#C9A24B" },
  { left: "66%", bottom: "60%", size: 3, delay: 3, duration: 20, color: "#F4B6C2" },
  { left: "18%", bottom: "62%", size: 2.5, delay: 12, duration: 19, color: "#FFF1F3" },
  { left: "86%", bottom: "58%", size: 3, delay: 10, duration: 21, color: "#C9A24B" },
];

// Slowly drifting, twinkling fairy-dust motes.
export default function FairyDust({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      {MOTES.map((mote, i) => (
        <span
          key={i}
          className="absolute animate-drift rounded-full will-change-transform"
          style={{
            left: mote.left,
            bottom: mote.bottom,
            width: mote.size,
            height: mote.size,
            backgroundColor: mote.color,
            boxShadow: `0 0 ${mote.size * 2}px ${mote.color}`,
            animationDelay: `${mote.delay}s`,
            animationDuration: `${mote.duration}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
