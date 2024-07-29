import { page } from '$app/stores';
import defaultLanguage from '$config/language/default.js';
import { derived } from 'svelte/store';

export default derived(page, $page => {
  return $page.params.language ?? defaultLanguage;
});
