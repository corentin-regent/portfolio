import selectedTheme from './selected.svelte.js';
import systemTheme from './system.svelte.js';

const themeRune = $derived.by(() => {
  return {
    get isSameAsSystem() {
      return selectedTheme.get() === systemTheme.get();
    },

    get colorScheme() {
      return selectedTheme.get();
    },

    toggle() {
      selectedTheme.set(selectedTheme.get() === 'dark' ? 'light' : 'dark');
    },
  }
});

export default () => themeRune;
