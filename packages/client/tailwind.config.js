/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    colors: {
    background: "hsl(--background)"
    // --foreground
    // --card
    // --card-foreground
    // --popover
    // --popover-foreground
    // --primary
    // --primary-foreground
    // --secondary
    // --secondary-foreground
    // --muted
    // --muted-foreground
    // --accent
    // --accent-foreground
    // --destructive
    // --destructive-foreground
    // --border
    // --input
    // --ring
    // --radius
    },
    extend: {},
  },
  plugins: [],
}