<script context="module">
  import frenchFlag from '$assets/flags/fr.svg';
  import Image from '$components/Image.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={frenchFlag} alt={$messages.get('french')} showTooltip />
