import { page } from '$app/stores';
import defaultLanguage from '$stores/language/default.js';
import selectedLanguage from '$stores/language/selected.svelte.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';
import { derived } from 'svelte/store';

const origin = 'https://corentin-regent.github.io';

export default derived([page, selectedLanguage], ([$page, $selectedLanguage]) => {
  const basePath = $page.url.pathname.includes('/portfolio') ? '/portfolio' : '';
  return ({
    endpoint = $page.url.pathname,
    language = $selectedLanguage,
    absolute = false,
    includeDefaultLanguage = false,
  }) => {
    const endpointWithoutBasePath = basePath ? endpoint.replace(new RegExp(`^${basePath}`), '') : endpoint
    const endpointWithoutLanguage = endpointWithoutBasePath.replace(new RegExp(`^/${$selectedLanguage}/`), '/')
    const includeLanguage = includeDefaultLanguage || language !== defaultLanguage;
    const endpointWithLanguage = includeLanguage
      ? `/${language}${endpointWithoutLanguage}`
      : endpointWithoutLanguage;
    const endpointWithBasePath = basePath + endpointWithLanguage;
    return withTrailingSlash(absolute ? origin + endpointWithBasePath : endpointWithBasePath);
  };
});
