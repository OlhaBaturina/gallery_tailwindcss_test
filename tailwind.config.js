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
      accentHover: '#F9CA49',
      textWhite: '#FFFFFE'

    },
    fontFamily: {
      title: ['Oswald', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      // задати значення
      spacing: {
        's': '2rem',
        'm': '3rem',
        'l': '4rem',
        'xl': '5rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
