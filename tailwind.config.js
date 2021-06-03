const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';
console.log('TAILWIND_MODE ', process.env.TAILWIND_MODE)

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp')],
};
