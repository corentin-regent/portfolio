<script module>
  import assemblife from '$assets/assemblife.webp';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={assemblife} alt="Assemblife" />
