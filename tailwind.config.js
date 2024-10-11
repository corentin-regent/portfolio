import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      animation: {
        'spin-non-uniform': 'spin 2s ease-in-out infinite',
      },
      colors: Object.fromEntries(
        [
          'anti-bg1',
          'anti-bg2',
          'bg1',
          'bg2',
          'bg3',
          'dark-bg1',
          'leagues-main-color2',
          'leagues-main-color1',
          'primary1',
          'primary-darker1',
          'primary-lighter1',
          'text1',
          'text2',
          'text-light',
        ].map(colorName => [colorName, `var(--${colorName})`])
      ),
      grayscale: {
        75: '75%',
      },
    },
    screens: {
      xs: '512px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('first-child', '&:not(:first-child)');
      addVariant('not-hover', '&:not(:hover)');
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({ stop: value => ({ stopColor: value }) }, { values: theme('colors') });
    }),
  ],
};
