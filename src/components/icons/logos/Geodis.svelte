<script context="module">
  import geodis from '$assets/logos/geodis.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={geodis} alt="Geodis" showTooltip />
