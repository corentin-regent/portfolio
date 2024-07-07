import { base as basePath } from '$app/paths';
import { page } from '$app/stores';
import defaultLanguage from '$stores/language/default.js';
import selectedLanguage from '$stores/language/selected.svelte.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';
import { derived } from 'svelte/store';

const origin = 'https://corentin-regent.github.io/portfolio';

export default derived([page, selectedLanguage], ([$page, $selectedLanguage]) => {
  return ({
    endpoint = $page.url.pathname,
    language = $selectedLanguage,
    absolute = false,
    includeDefaultLanguage = false,
  }) => {
    const endpointWithoutLanguage = endpoint.replace(new RegExp(`^/${$selectedLanguage}/`), '/');
    const includeLanguage = includeDefaultLanguage || language !== defaultLanguage;
    const endpointWithLanguage = includeLanguage
      ? `/${language}${endpointWithoutLanguage}`
      : endpointWithoutLanguage;
    const endpointIncludingBase = basePath.startsWith('/')
      ? basePath + endpointWithLanguage
      : endpointWithLanguage;
    return withTrailingSlash(absolute ? origin + endpointIncludingBase : endpointIncludingBase);
  };
});
