import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        brand: { bg: "#FAF8F4", green: "#2C4A3E", light: "#69CF61", ink: "#1A1D1C" },
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
      keyframes: { floaty: { "0%,100%":{transform:"translateY(0)"}, "50%":{transform:"translateY(-10px)"} } },
      animation: { floaty: "floaty 6s ease-in-out infinite" },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
