<script context="module">
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src="/logos/sopra-steria.svg" alt="Sopra Steria" showTooltip />
