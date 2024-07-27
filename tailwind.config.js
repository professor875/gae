import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        page: '1440px',
      },
      colors: {
        primary: '#EC1E25',
        primaryBright: '#FF2929',
        secondary: '#1E1E1E',
      }
    },
  },
  plugins: [],
}

