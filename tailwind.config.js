/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}" , 
    "*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('../src/assets/bg.png')",
      'banner-pattern': "url('../src/assets/bannerpattern5.png')",
      'footer-texture': "url('/img/footer-texture.png')",
      'logo-pattern':"url('../src/assets/logopattern.png')",
      'logo-marks':"url('../src/assets/logomark.png')",
      'logo-marks-2':"url('../src/assets/logo3.png')"
    },
    screens: {
      // 'ti':'380px',
      // 'xs':'480px',
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px',
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'min': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
      'ti':{'max': '380px'},
      'tablet':{'min': '768px' , 'max' : '1022px'}
    },
    colors: {
      'light-brand': '#8572A8',
      'white': '#fff',
      'black-brand':'#202020',
      'pink-brand':'#F065A5',
      'light-background':'#EFECF5',
      'text-grey':'#ADADAD',
      'light-black':'#858585',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#959EAD',
      'gray': '#959EAD',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}

