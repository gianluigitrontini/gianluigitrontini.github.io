module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        classic: '0 0 15px rgba(0,0,0,0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
