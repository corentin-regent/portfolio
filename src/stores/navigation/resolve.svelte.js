import { page } from '$app/stores';
import defaultLanguage from '$stores/language/default.js';
import selectedLanguage from '$stores/language/selected.svelte.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';
import { derived } from 'svelte/store';

const origin = 'https://corentin-regent.github.io'

export default derived([page, selectedLanguage], ([$page, $selectedLanguage]) => {
  return ({
    endpoint = $page.url.pathname,
    language = $selectedLanguage,
    absolute = false,
    includeDefaultLanguage = false,
  }) => {
    const endpointWithoutLanguage = endpoint.replace(new RegExp(`^/${$selectedLanguage}/`), '/');
    const includeLanguage = includeDefaultLanguage || language !== defaultLanguage;
    const resolvedEndpoint = includeLanguage
      ? `/${language}${endpointWithoutLanguage}`
      : endpointWithoutLanguage;
    return withTrailingSlash(absolute ? origin + resolvedEndpoint : resolvedEndpoint);
  };
});
