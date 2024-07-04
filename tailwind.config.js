export default {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: Object.fromEntries(
        ['anti-bg1', 'anti-bg2', 'bg1', 'primary1', 'text1', 'text2'].map(colorName => [
          colorName,
          `var(--${colorName})`,
        ])
      ),
      grayscale: {
        75: '75%',
      },
      screens: {
        xs: '512px',
      },
    },
  },
};
