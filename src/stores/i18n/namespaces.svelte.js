import { page } from '$app/stores';
import resolve from '$stores/navigation/resolve.svelte';
import accumulate from '$utils/accumulate.js';
import { derived } from 'svelte/store';

export default derived([page, resolve], ([$page, $resolve]) => {
  const pathWithLang = $resolve({ includeDefaultLanguage: true });
  const pathParts = pathWithLang.split('/').filter(Boolean);
  return [
    '/',
    ...accumulate(pathParts, (path, part) => `${path}/${part}`).map(endpoint => `/${endpoint}/`),
    ...($page.error ? [$resolve({ endpoint: '/error', includeDefaultLanguage: true })] : [])
  ];
});
