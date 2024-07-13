import { base as basePath } from '$app/paths';
import en from '$messages/en/index.js';
import fr from '$messages/fr/index.js';
import mapKeys from '$utils/mapKeys.js';
import withTrailingSlash from '$utils/withTrailingSlash.js';

const routeToMessages = Object.fromEntries(
  Object.entries({
    en,
    fr,
  }).flatMap(([language, languageMessages]) =>
    Object.entries(languageMessages).map(([route, routeMessages]) => [
      withTrailingSlash(`/${language}${route}`),
      routeMessages,
    ])
  )
);

export default mapKeys(routeToMessages, ({ key: path }) => basePath + path);
