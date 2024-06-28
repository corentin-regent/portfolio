<script context="module">
  import Dark from '$components/icons/themes/Dark.svelte';
  import Light from '$components/icons/themes/Light.svelte';
  import System from '$components/icons/themes/System.svelte';
  import Theme from '$runes/theme/enum.js';
  import theme from '$runes/theme/theme.svelte.js';

  const icons = {
    [Theme.LIGHT]: Light,
    [Theme.DARK]: Dark,
    [Theme.SYSTEM]: System,
  };
  const themeValues = Object.values(Theme);
  const targets = Object.fromEntries(
    themeValues.map((value, index) => [value, themeValues[(index + 1) % themeValues.length]])
  );
</script>

<script>
  const { ...restProps } = $props();
</script>

<button {...restProps} onclick={() => (theme.selected = targets[theme.selected])}>
  <svelte:component this={icons[theme.selected]} />
</button>
