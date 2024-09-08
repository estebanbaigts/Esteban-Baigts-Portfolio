module.exports = {
  theme: {
    extend: {
      keyframes: {
        'background-animate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'bg-animation': 'background-animate 10s ease infinite',
      },
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [],
};
