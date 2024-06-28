import { browser } from '$app/environment';

function systemThemeRune() {
  if (!browser) {
    return { get: () => 'dark' };
  }

  const systemThemeMediaQuery = window.matchMedia?.('(prefers-color-scheme: light)');
  let systemTheme = $state(systemThemeMediaQuery?.matches ? 'light' : 'dark');
  systemThemeMediaQuery?.addEventListener('change', event => {
    const newSystemTheme = event.matches ? 'light' : 'dark';
    if (systemTheme !== newSystemTheme) {
      systemTheme = newSystemTheme;
    }
  });
  return { get: () => systemTheme };
}

export default systemThemeRune();
