import { readdir } from 'fs/promises';
import availableLanguages from 'src/stores/language/available.js';
import defaultLanguage from 'src/stores/language/default.js';

const tests = readdir('tests/integration/allRoutes').then(async paths =>
  (
    await Promise.all(
      paths
        .filter(path => !path.endsWith('.test.js'))
        .map(file => 'tests/integration/allRoutes/' + file)
        .map(module => import(module))
    )
  ).map(({ default: test }) => test)
);

await Promise.all(
  await readdir('src/routes/', { recursive: true }).then(paths =>
    paths
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
      .flatMap(async route => (await tests).map(test => test({ page, route })))
  )
);
