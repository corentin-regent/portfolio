import { browser } from '$app/environment';
import systemTheme from './system.svelte.js';

const STORAGE_KEY = 'theme';

function selectedThemeRune() {
  if (!browser) {
    return systemTheme;
  }

  let selectedTheme = $state(window.localStorage.getItem(STORAGE_KEY));
  window.addEventListener('storage', event => {
    if (event.key === STORAGE_KEY && event.newValue !== selectedTheme) {
      selectedTheme = event.newValue;
    }
  });

  return {
    get: () => selectedTheme ?? systemTheme.get(),
    set(theme) {
      window.localStorage.setItem(STORAGE_KEY, theme);
      selectedTheme = theme;
    },
  };
}

export default selectedThemeRune();
