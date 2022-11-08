/** @type {import('tailwindcss').Config} */

const ELEMENTS = [
  'undefined',
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

module.exports = {
  content:["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {},
      colors: {
        elm: Object.fromEntries(ELEMENTS.map((current)=>[current, `var(--elm-${current})`])),
      }
    },
  },
  plugins: [],
  safelist: [...ELEMENTS.map((elm) => [`text-elm-${elm}`, `border-elm-${elm}`, `bg-elm-${elm}`, `from-elm-${elm}`, `to-elm-${elm}`]).flat()]
}
