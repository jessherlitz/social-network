/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '875px',
      lg: '1230px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        default: ['Roobert-Regular'],
        rbold: ['Roobert TWHINT Bold'],
        semi: ['Roobert TWHINT SemiBold'],
        regular: ['Roobert'],
        thin: ['Roobert TWHINT Regular'],
        inter: ['Inter', 'sans-serif']
      }
      ,
      colors: {
        purple: '#9047FF',
        test: 'rgb(83, 83, 95)',
        pdark: 'rgb(92, 22, 197)',
        primaryGray: 'rgb(239, 239, 241)',
        secondaryGray: 'rgb(247, 247, 248)'
      }
    },
    plugins: [],
  }
}