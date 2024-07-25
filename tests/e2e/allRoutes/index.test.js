import { readdirSync } from 'fs';
import availableLanguages from 'src/stores/language/available.js';
import defaultLanguage from 'src/stores/language/default.js';

const tests = (
  await Promise.all(
    readdirSync('tests/e2e/allRoutes')
      .filter(path => !path.endsWith('.test.js'))
      .map(file => 'tests/e2e/allRoutes/' + file)
      .map(module => import(module))
  )
).map(({ default: test }) => test);

describe('Tests for all routes', () => {
  readdirSync('src/routes/', { recursive: true })
    .filter(path => path.endsWith('+page.svelte'))
    .map(path => '/' + path)
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
    .flatMap(route => {
      describe(`route '${route}'`, () => {
        beforeAll(() => page.goto(ROOT_URL + route));
        tests.forEach(test => test(page));
      });
    });
});
