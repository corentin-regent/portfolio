import { browser } from '$app/environment';
import systemTheme from './system.svelte.js';

const storageKey = 'theme';

function selectedThemeRune() {
  if (!browser) {
    return systemTheme;
  }

  let selectedTheme = $state(window.localStorage.getItem(storageKey));
  window.addEventListener('storage', event => {
    if (event.key === storageKey && event.newValue !== selectedTheme) {
      selectedTheme = event.newValue;
    }
  });

  return {
    get: () => selectedTheme ?? systemTheme.get(),
    set(theme) {
      window.localStorage.setItem(storageKey, theme);
      selectedTheme = theme;
    },
  };
}

export default selectedThemeRune();
