export default function mkTheme(systemTheme, selectedTheme) {
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
  };
}
