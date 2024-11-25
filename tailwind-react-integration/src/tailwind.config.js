module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all JS/JSX/TS/TSX files in src
    './public/index.html',        // Scans your HTML files
  ],
  darkMode: 'class', // Enables dark mode using a custom class (you can use 'media' as well)
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Add 'active' state for backgroundColor
    },
  },
  plugins: [],
}
