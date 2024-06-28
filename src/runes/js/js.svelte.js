import jsEnabled from './enabled.svelte';

const jsRune = $derived({
  get isEnabled() {
    return jsEnabled.get();
  },
});

export default jsRune;
