import { page } from '$app/stores';
import defaultLanguage from '$config/language/default.js';
import selectedLanguage from '$stores/language/selected.svelte.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';
import { derived } from 'svelte/store';

const origin = 'https://corentin-regent.github.io';

export default derived([page, selectedLanguage], ([$page, $selectedLanguage]) => {
  const basePath = $page.url.pathname.includes('/portfolio') ? '/portfolio' : '';
  return ({
    route = $page.url.pathname,
    language = $selectedLanguage,
    absolute = false,
    includeDefaultLanguage = false,
  }) => {
    const routeWithoutBasePath = basePath ? route.replace(new RegExp(`^${basePath}`), '') : route;
    const routeWithoutLanguage = routeWithoutBasePath.replace(
      new RegExp(`^/${$selectedLanguage}/`),
      '/'
    );
    const includeLanguage = includeDefaultLanguage || language !== defaultLanguage;
    const routeWithLanguage = includeLanguage
      ? `/${language}${routeWithoutLanguage}`
      : routeWithoutLanguage;
    const routeWithBasePath = basePath + routeWithLanguage;
    return withTrailingSlash(absolute ? origin + routeWithBasePath : routeWithBasePath);
  };
});
