module.exports = {
  theme: {
    extend: {
      keyframes: {
        'background-animate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'bg-animation': 'background-animate 10s ease infinite',
        'infinite-scroll': 'scroll 20s linear infinite',
      },
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  plugins: [],
};
