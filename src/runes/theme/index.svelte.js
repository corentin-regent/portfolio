import selectedTheme from './selected.svelte';
import systemTheme from './system.svelte';

const themeRune = $derived({
  get isSameAsSystem() {
    return selectedTheme.get() === systemTheme.get();
  },
  toggle() {
    selectedTheme.set(selectedTheme.get() === 'dark' ? 'light' : 'dark');
  },
});

export default themeRune;
