<script module>
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src="/assemblife.webp" alt="Assemblife" />
