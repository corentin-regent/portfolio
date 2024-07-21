<script context="module">
  import Image from '$components/Image.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src="/flags/en.svg" alt={$messages.get('english')} showTooltip />
