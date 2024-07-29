<script context="module">
  import englishFlag from '$assets/flags/en.svg';
  import Image from '$components/Image.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={englishFlag} alt={$messages.get('english')} showTooltip />
