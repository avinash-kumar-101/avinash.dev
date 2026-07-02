module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        script: ["Dancing Script", "Allura", "cursive"],
      },
      colors: {
        primary: "#f8f4ee",
        secondary: "#f7efe6",
        accent: "#8b5727",
        textMain: "#111827",
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(139,87,39,0.15)",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
}
