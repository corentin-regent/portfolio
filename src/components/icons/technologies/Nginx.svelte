<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://nginx.org/en/">
  <Image class={height} src="/technologies/nginx.svg" alt="Nginx" showTooltip />
</Link>
