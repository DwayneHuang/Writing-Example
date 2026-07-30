/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        figma: {
          black: "#000000",
          white: "#ffffff",
          "surface-soft": "#f7f7f5",
          hairline: "#e6e6e6",
          "hairline-soft": "#f1f1f1",
          lime: "#dceeb1",
          lilac: "#c5b0f4",
          cream: "#f4ecd6",
          pink: "#efd4d4",
          mint: "#c8e6cd",
          coral: "#f3c9b6",
          navy: "#1f1d3d",
          magenta: "#ff3d8b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'figma-xs': '2px',
        'figma-sm': '6px',
        'figma-md': '8px',
        'figma-lg': '24px',
        'figma-xl': '32px',
        'figma-pill': '50px',
      }
    },
  },
  plugins: [],
}
