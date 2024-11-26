module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Path to all source files
    './public/index.html',        // Path to your HTML files
  ],
  darkMode: 'class',  // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Enable 'active' variant for backgroundColor
    },
  },
  plugins: [],
}
