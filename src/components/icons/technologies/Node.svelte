<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://nodejs.org/">
  <Image class={imgClass} src="/technologies/node.svg" alt="NodeJS" showTooltip />
</Link>
