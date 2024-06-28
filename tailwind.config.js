import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,svelte}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: colors.zinc['100'],
        gray: colors.zinc['500'],
        dark: colors.zinc['900'],
        primary: '#FF5700',
      },
      grayscale: {
        75: '75%',
      },
    },
  },
};
