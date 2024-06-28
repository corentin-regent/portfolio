import { page } from '$app/stores';
import { derived } from 'svelte/store';
import availableLanguages from './available.js';
import defaultLanguage from './default.js';

export default derived(page, $page => {
  const firstUrlPart = $page.url.pathname.split('/')[1];
  return availableLanguages.includes(firstUrlPart) ? firstUrlPart : defaultLanguage;
});
