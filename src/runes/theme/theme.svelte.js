import selectedTheme from './selected.svelte';
import systemTheme from './system.svelte';

const themeRune = $derived({
  get system() {
    return systemTheme.get();
  },
  get selected() {
    return selectedTheme.get();
  },
  set selected(theme) {
    selectedTheme.set(theme);
  },
});

export default themeRune;
