module.exports = {
  "purge",: [
    './src/**/*.{js,jsx,ts,tsx}', // Path to all your source files
    './public/index.html',        // Path to your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  "darkMode",: 'class', // 'media' or 'class'
  "purge": [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  "purge",: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  "darkMode",: 'class',  // Optional
  theme: {
    extend: {},
  },
  "variants",: {
    extend: {
      backgroundColor: ['active'],  // Add 'active' state to backgroundColor utilities
    },
  },
  plugins: [],
}
