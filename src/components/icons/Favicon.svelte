<script context="module">
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src="/favicon.svg" alt="Favicon" />
