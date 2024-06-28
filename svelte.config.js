import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import htmlMinifierAdaptor from "sveltekit-html-minifier";

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: htmlMinifierAdaptor(adapter({
      fallback: '404.html',
      pages: 'build'
    }), {
      pages: 'build',
      minifierOptions: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
      }
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
