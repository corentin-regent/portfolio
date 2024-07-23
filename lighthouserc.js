import { readdirSync } from 'fs';
import availableLanguages from './src/stores/language/available.js';
import defaultLanguage from './src/stores/language/default.js';

const allUrls = readdirSync('src/routes/', { recursive: true })
  .filter(path => path.endsWith('+page.svelte'))
  .map(path => path.replace('+page.svelte', ''))
  .flatMap(route =>
    route.includes('[[language=language]]')
      ? availableLanguages.map(language =>
          route.replace(
            '[[language=language]]/',
            language === defaultLanguage ? '' : language + '/'
          )
        )
      : [route]
  )
  .map(route => 'http://localhost/' + route);

export default {
  ci: {
    collect: {
      method: 'node',
      headful: false,
      additive: false,
      numberOfRuns: 3,
      startServerCommand: 'docker run --rm -p 80:80 portfolio',
      url: allUrls,
    },
    assert: {
      preset: 'lighthouse:all',
      assertions: {
        'is-crawlable': 'off', // TODO: enable this when we go public
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse/',
    },
  },
};
