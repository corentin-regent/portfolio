<script context="module">
  import en from './flags/en.svelte';
  import fr from './flags/fr.svelte';

  const flags = { en, fr };
</script>

<script>
  const { language, ...restProps } = $props();
</script>

<svelte:component this={flags[language]} {...restProps} />
