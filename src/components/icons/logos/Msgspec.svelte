<script context="module">
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src="/logos/msgspec.svg" alt="msgspec" showTooltip />
