import defaultLanguage from '$config/language/default.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';

const origin = 'https://corentin-regent.github.io';

export default function mkResolve(page, selectedLanguage) {
  const basePath = page.url.pathname.includes('/portfolio') ? '/portfolio' : '';
  const basePathRegex = new RegExp(`^${basePath}`);
  const selectedLanguageRegex = new RegExp(`^/${selectedLanguage}/`);
  return ({
    route = page.url.pathname,
    language = selectedLanguage,
    absolute = false,
    includeDefaultLanguage = false,
  }) => {
    const routeWithoutBasePath = basePath ? route.replace(basePathRegex, '') : route;
    const routeWithoutLanguage = routeWithoutBasePath.replace(selectedLanguageRegex, '/');
    const includeLanguage = includeDefaultLanguage || language !== defaultLanguage;
    const routeWithLanguage = includeLanguage
      ? `/${language}${routeWithoutLanguage}`
      : routeWithoutLanguage;
    const routeWithBasePath = basePath + routeWithLanguage;
    return withTrailingSlash(absolute ? origin + routeWithBasePath : routeWithBasePath);
  };
}
