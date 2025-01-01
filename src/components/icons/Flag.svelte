<script module>
  import en from './flags/en.svelte';
  import fr from './flags/fr.svelte';

  const flags = { en, fr };
</script>

<script>
  const { language, ...restProps } = $props();
  const ContryFlag = $derived(flags[language]);
</script>

<ContryFlag {...restProps} />
