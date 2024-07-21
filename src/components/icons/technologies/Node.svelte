<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://nodejs.org/">
  <Image class={height} src="/technologies/node.svg" alt="NodeJS" showTooltip />
</Link>
