import { base } from '$app/paths';
import defaultLanguage from '$config/language/default.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';

const CANONICAL_ORIGIN = 'https://corentin-regent.github.io';

const basePath = base !== '.' ? base : '';
const basePathRegex = new RegExp(`^${basePath}`);

export default function mkResolve(page, selectedLanguage) {
  const selectedLanguageRegex = new RegExp(`^/${selectedLanguage}/`);
  const nakedPathName = page.url.pathname
    .replace(basePathRegex, '')
    .replace(selectedLanguageRegex, '/');
  return ({
    route = nakedPathName,
    language = selectedLanguage,
    absolute = false,
    includeDefaultLanguage = false,
  }) => {
    const includeLanguage = includeDefaultLanguage || language !== defaultLanguage;
    const routeWithLanguage = includeLanguage
      ? `/${language}${route}`
      : route;
    const routeWithBasePathAndLanguage = basePath + routeWithLanguage;
    return withTrailingSlash(absolute ? CANONICAL_ORIGIN + routeWithBasePathAndLanguage : routeWithBasePathAndLanguage);
  };
}
