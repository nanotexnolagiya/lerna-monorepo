/** @type {import('tailwindcss').Config} */
import {
  fontStyles,
  colors
} from "../../config/style.constants";

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './styles/**/*.{css,scss}'
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [function ({
    addUtilities
  }) {
    const newUtilities = {}
    for (let i = 1; i <= 10; i++) {
      newUtilities[`.truncate-lines-${i}`] = {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        '-webkit-line-clamp': `${i}`,
      }
    }
    addUtilities({
      ...newUtilities,
      ...fontStyles
    }, ['responsive', 'hover'])
  }],
}