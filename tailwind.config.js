/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FBE4E8",      // blush-pink background
        blushlight: "#FFF1F3", // near-white pink center
        petal: "#F4B6C2",      // petal pink
        rose: "#D9778A",       // rose pink
        burgundy: "#8B2F3A",   // deep burgundy text
        sage: "#8FAE8B",       // leaf sage green (small accents)
        gold: "#C9A24B",       // soft gold (tiny details)
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        shine:
          "linear-gradient(100deg, #8B2F3A 0%, #8B2F3A 36%, #C9A24B 50%, #8B2F3A 64%, #8B2F3A 100%)",
      },
      boxShadow: {
        soft: "0 12px 34px -18px rgba(139, 47, 58, 0.35)",
        card: "0 22px 46px -28px rgba(139, 47, 58, 0.45)",
      },
      keyframes: {
        flutter: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        flap: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.72)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
        wing: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.9)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.82)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)", opacity: "0" },
          "12%": { opacity: "0.9" },
          "88%": { opacity: "0.55" },
          "100%": { transform: "translate3d(16px, -150px, 0)", opacity: "0" },
        },
        fall: {
          "0%": { transform: "translate3d(0, -8vh, 0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.85" },
          "100%": { transform: "translate3d(46px, 112vh, 0) rotate(320deg)", opacity: "0" },
        },
        tick: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(201, 162, 75, 0)" },
          "50%": { boxShadow: "0 0 22px rgba(201, 162, 75, 0.45)" },
        },
      },
      animation: {
        flutter: "flutter 8s ease-in-out infinite",
        flap: "flap 1.6s ease-in-out infinite",
        sway: "sway 10s ease-in-out infinite",
        bob: "bob 7s ease-in-out infinite",
        wing: "wing 2.8s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        drift: "drift 16s linear infinite",
        fall: "fall 20s linear infinite",
        tick: "tick 0.45s ease-out",
        shimmer: "shimmer 7s linear infinite",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
