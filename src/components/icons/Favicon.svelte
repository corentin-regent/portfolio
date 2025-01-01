<script module>
  import favicon from '$assets/favicon.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={favicon} alt="Favicon" />
