import defaultLanguage from '$config/language/default.js';

export default function mkSelectedLanguage(page) {
  return page.params.language ?? defaultLanguage;
}
