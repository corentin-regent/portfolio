import accumulate from '$utils/accumulate.js';

export default function mkNamespaces(page, resolve) {
  const pathWithLang = resolve({ includeDefaultLanguage: true });
  const pathParts = pathWithLang.split('/').filter(Boolean);
  return [
    '/',
    ...accumulate(pathParts, (path, part) => `${path}/${part}`).map(route => `/${route}/`),
    ...(page.error ? [resolve({ route: '/error', includeDefaultLanguage: true })] : []),
  ];
}
