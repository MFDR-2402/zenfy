/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    extend: {
      colors: {
        'para': '#243c5a',
        'black-color2': '#1E1F1F',
        'black-color3': '#0B0C0C',
        'light-black-color': '#242627',
        'title-color': '#0B0C0C',
        'dark-title-color': '#0B0C0C',
        'title-color-opc': 'rgba(11,12,12,0.05)',
        'text-color': '#3F444B',
        'primary-color1': '#3067FF',
        'primary-color2': '#0B0C0C',
        'dark-primary-color2': '#0B0C0C',
        'border-color': '#eee',
        'border-color2': '#eee',
        'linear_1': 'linear-gradient(180deg,rgba(237,241,252,0.38) 0%,rgba(201,215,255,0.13) 100%)'
      },
      backgroundImage: {
        'hero': 'url("../images/zen07.jpg")',
        'linear_1': 'linear-gradient(180deg,rgba(237,241,252,0.38) 0%,rgba(201,215,255,0.13) 100%)'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'Inter': ["Inter", "sans-serif"],
      'Hanken': ["Hanken Grotesk", "sans-serif"]
    },
    animation: {
      slideUp: 'slideUp 0.8s linear 1',
      slideDown: 'slideDown 0.3s linear 1',
    },
    keyframes: {
      slideUp: {
        '0%, 100%': { 
          transform: 'transtaleY(0)',
           opacity: 1
          },

        '50%': { 
          transform: 'transtaleY(50%)',
          opacity: 0
         },
      },
      slideDown: {
        '0%, 100%': { 
          transform: 'transtaleY(0)',
           opacity: 1
          },

        '50%': { 
          transform: 'transtaleY(50%)',
          opacity: 0
         },
      }
    }
  },
  plugins: [],
}

