import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
      precompress: true,
    }),
    alias: {
      '$components/*': 'src/components/*',
      '$runes/*': 'src/runes/*',
      '$stores/*': 'src/stores/*',
      '$utils/*': 'src/utils/*',
    },
    moduleExtensions: ['.js'],
  },
};
