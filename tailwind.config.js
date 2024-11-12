/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'shine': 'shine 3s linear infinite',
        'holo-sparkle': 'holoSparkle 20s linear infinite',
        'holo-spin': 'holo-spin 3s linear infinite',
        'holo-shimmer': 'holo-shimmer 3s ease infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        holoSparkle: {
          '0%': { transform: 'translateZ(0)' },
          '100%': { transform: 'translateZ(160px)' },
        },
        'holo-spin': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'holo-shimmer': {
          '0%': { transform: 'translateX(-100%) rotate(35deg)' },
          '100%': { transform: 'translateX(100%) rotate(35deg)' },
        },
      },
      perspective: {
        'default': '1000px'
      },
      rotate: {
        'y-12': '12deg'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Gill Sans', 'sans-serif'],
    },
  },
  plugins: [],
}