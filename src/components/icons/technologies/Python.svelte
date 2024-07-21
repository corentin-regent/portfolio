<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.python.org/">
  <Image class={height} src="/technologies/python.svg" alt="Python" showTooltip />
</Link>
