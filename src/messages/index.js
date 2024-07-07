import { base as basePath } from '$app/paths';
import withTrailingSlash from '$utils/withTrailingSlash.js';
import enContact from './en/contact.js';
import enError from './en/error.js';
import enExperience from './en/experience.js';
import enProjects from './en/projects.js';
import enRoot from './en/root.js';
import frContact from './fr/contact.js';
import frError from './fr/error.js';
import frExperience from './fr/experience.js';
import frProjects from './fr/projects.js';
import frRoot from './fr/root.js';
import root from './root.js';

const en = {
  '/': enRoot,
  '/contact': enContact,
  '/error': enError,
  '/experience': enExperience,
  '/projects': enProjects,
};

const fr = {
  '/': frRoot,
  '/contact': frContact,
  '/error': frError,
  '/experience': frExperience,
  '/projects': frProjects,
};

export default Object.fromEntries(
  Object.entries({
    '/': root,
    ...Object.fromEntries(
      Object.entries({
        en,
        fr,
      }).flatMap(([language, languageMessages]) =>
        Object.entries(languageMessages).map(([route, routeMessages]) => [
          withTrailingSlash(`/${language}${route}`),
          routeMessages,
        ])
      )
    ),
  }).map(([path, messages]) => [basePath + path, messages])
);
