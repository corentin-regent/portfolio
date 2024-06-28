import availableLanguages from '$stores/language/available.js';
import defaultLanguage from '$stores/language/default.js';

export function match(language) {
  return language !== defaultLanguage && availableLanguages.includes(language);
}
