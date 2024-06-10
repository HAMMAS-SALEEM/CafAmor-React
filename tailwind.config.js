/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        goldBtn: 'rgb(255,197,21)'
      }
    },
    screens: {
      sm: '0',
      md: '846px',
      lg: '1090px',
      xl: '1280px',
      '2xl': '1536px'
    },
    // borderWidth: {
    //   DEFAULT: '1px',
    //   0: '0',
    //   2: '2px',
    //   3: '3px',
    //   4: '4px',
    //   6: '6px',
    //   8: '8px'
    // }
  },
  plugins: [
    require('flowbite/plugin'),
    './node_modules/flowbite-react/lib/esm/**/*.js'
  ]
}
