import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
    }),
    alias: {
      '$assets/*': 'src/assets/*',
      '$components/*': 'src/components/*',
      '$config/*': 'src/config/*',
      '$logos/*': 'src/components/icons/logos/*',
      '$messages/*': 'src/messages/*',
      '$reactive/*': 'src/reactive/*',
      '$runes/*': 'src/runes/*',
      '$technologies/*': 'src/components/icons/technologies/*',
      '$utils/*': 'src/utils/*',
    },
    moduleExtensions: ['.js'],
    paths: {
      base: process.env.BASE_PATH ?? '',
    },
  },
};
