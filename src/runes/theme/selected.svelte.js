import { browser } from '$app/environment';
import Theme from './enum.js';

const storageKey = 'theme';

function selectedThemeRune() {
  if (!browser) {
    return { get: () => Theme.SYSTEM };
  }

  let selectedTheme = $state(window.localStorage.getItem(storageKey) ?? Theme.SYSTEM);
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) {
      return;
    }
    const newSelectedTheme = event.newValue ?? Theme.SYSTEM;
    if (selectedTheme !== newSelectedTheme) {
      selectedTheme = newSelectedTheme;
    }
  });

  return {
    get: () => selectedTheme,
    set(theme) {
      if (theme === Theme.SYSTEM) {
        window.localStorage.removeItem(storageKey);
      } else {
        window.localStorage.setItem(storageKey, theme);
      }
      selectedTheme = theme;
    },
  };
}

export default selectedThemeRune();
