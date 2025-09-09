/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        halvar: ['Halvar', 'sans-serif'],
        suisse: ['Suisse', 'sans-serif'],
      },
      height: {
        card_img_h: 'calc(100% - 3px)',
      },
      width: {
        card_img_w: 'calc(100% - 3px)',
      },
      colors: {
        primary: '#F24944',
        primary_light: '#F3615C',
        primary_dark: '#A73633',
        dark: '#191919',
        light: '#E5E5E5',
        input: '#252525',
        dark_gray: '#252525',
      },
      fontSize: {
        '7xl': '42px',
      },
      backgroundImage: {
        border_gradient: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(25, 25, 25, 1) 100%)',
      },
    },
    container: {
      // center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
      screens: {
        sm: '100%',
        md: '1360px',
        lg: '1360px',
        xl: '1600px',
      },
    },
  },
}
