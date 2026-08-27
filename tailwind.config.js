/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070c",
        abyss: "#0a0f1a",
        panel: "#0e1626",
        line: "rgba(244,242,236,0.08)",
        "line-bright": "rgba(244,242,236,0.16)",
        ink: "#f4f2ec",
        "ink-soft": "#8f97a8",
        "ink-faint": "#5b6479",
        "blue-deep": "#16294d",
        "blue-mid": "#2c5aa8",
        "blue-glow": "#6fa3e0",
        "sage-deep": "#1c3324",
        "sage-mid": "#3f7350",
        "sage-glow": "#7fc491",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widemono: "0.16em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
