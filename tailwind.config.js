module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#57534E',
        secondary: '#3F6212',
        tertiary: '#E4E1C9',
        'tertiary-dark': '#3E3D3A',
        error: '#DC2626',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
