/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '0',
      // => @media (min-width: 640px) { ... }

      md: '846px',
      // => @media (min-width: 768px) { ... }

      lg: '1090px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    // spacing: {
    //   1: '1px',
    //   2: '2px',
    //   3: '3px',
    //   4: '4px',
    //   6: '6px',
    //   8: '8px',
    //   9: '9px',
    //   10: '10px',
    //   11: '11px',
    //   12: '12px',
    //   13: '13px',
    //   14: '14px',
    //   15: '15px',
    //   16: '16px',
    //   17: '17px',
    //   18: '18px',
    //   20: '20px',
    //   21: '21px',
    //   22: '22px',
    //   23: '23px',
    // }
  },
  plugins: []
}
