/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: false,
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    colors: {
      primary: '#151515',
      accent: '#F6B600',
      accentHover: '#F6B4009A',

    },
    fontFamily: {
      heading: ['Oswald', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      // задати значення
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    })],
}
