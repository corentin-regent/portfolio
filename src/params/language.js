import availableLanguages from '$config/language/available.js';
import defaultLanguage from '$config/language/default.js';

export function match(language) {
  return language !== defaultLanguage && availableLanguages.includes(language);
}
