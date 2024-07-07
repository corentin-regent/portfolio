import { page } from '$app/stores';
import { derived } from 'svelte/store';
import defaultLanguage from './default.js';

export default derived(page, $page => {
  return $page.params.language ?? defaultLanguage;
});
