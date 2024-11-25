module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Path to all your source files
    './public/index.html',        // Path to your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  darkMode: 'class', // 'media' or 'class'
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
<body class="dark">
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    This text will be white in dark mode and black in light mode.
  </div>
</body>
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',  // Optional
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],  // Add 'active' state to backgroundColor utilities
    },
  },
  plugins: [],
}
