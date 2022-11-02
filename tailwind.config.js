/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    colors: {
      primary: '#151515',
      accent: '#F6B600',
      accentHover: '#CFA226',
      textWhite: '#FFFFFE'

    },
    fontFamily: {
      title: ['Oswald', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
    },
    screens: {
      'tablet': '576px',
      'desktop': '960px',
    },
    extend: {
      // задати значення
      spacing: {
        'xs': '32px',
        's': '2rem',
        'm': '3rem',
        'l': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
        '3xl': '7rem',

      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    
  ],
}
