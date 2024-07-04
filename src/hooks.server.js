import availableLanguages from '$stores/language/available.js';
import defaultLanguage from '$stores/language/default.js';

export function handle({ event, resolve }) {
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      const selectedLanguage =
        availableLanguages.find(lang => event.url.pathname.startsWith(`/${lang}/`)) ??
        defaultLanguage;
      return html.replace('%lang%', selectedLanguage);
    },
  });
}
