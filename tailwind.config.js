/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-layout': '40px repeat(6, 1fr)',
      },
      gridTemplateRows: {
        'custom-layout': 'repeat(2,1fr)',
      },
    },
  },
}
