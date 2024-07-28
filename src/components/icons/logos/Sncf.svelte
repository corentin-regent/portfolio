<script context="module">
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src="/logos/sncf.svg" alt="SNCF" showTooltip />
