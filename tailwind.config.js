const flowbite = require("flowbite-react/tailwind");
const withMT = require('@material-tailwind/react/utils/withMT')
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    flowbite.plugin(),
  ],
  theme: {
    extend: {
      colors: {
        goldBtn: 'rgb(255,197,21)',
        blueInp: 'rgb(239,244,246)'
      }
    },
    screens: {
      sm: '0',
      md: '846px',
      lg: '1090px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [
    flowbite.plugin(),
    // './node_modules/flowbite-react/lib/esm/**/*.js'
  ]
})
