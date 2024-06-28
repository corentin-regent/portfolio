import resolve from '$stores/navigation/resolve.svelte.js';
import { derived } from 'svelte/store';
import common from './common.js';
import en from './en/index.js';
import fr from './fr/index.js';

const commonMessages = {
  '/': common
}

const messagesPerLanguage = Object.fromEntries(
  Object.entries({
    en,
    fr,
  }).map(([language, { rootMessages, errorPageMessages }]) => [language, {
    '/': rootMessages,
    '/error': errorPageMessages
  }])
)

export default derived(resolve, $resolve => {
  const i18nMessages = Object.entries(messagesPerLanguage).map(([language, messagesPerEndpoint]) =>
    Object.fromEntries(
      Object.entries(messagesPerEndpoint).map(([endpoint, messagePerId]) => [
        $resolve({ endpoint, language, includeDefaultLanguage: true }),
        messagePerId,
      ])
    )
  );
  return [commonMessages, ...i18nMessages].reduce((acc, incoming) => ({ ...acc, ...incoming }));
});
