import selectedTheme from './selected.svelte';
import systemTheme from './system.svelte';

const themeRune = $derived({
  get isSameAsSystem() {
    return selectedTheme.get() === systemTheme.get();
  },

  get colorScheme() {
    return selectedTheme.get();
  },

  toggle() {
    selectedTheme.set(selectedTheme.get() === 'dark' ? 'light' : 'dark');
  },
});

export default themeRune;
