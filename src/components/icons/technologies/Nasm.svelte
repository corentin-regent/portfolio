<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.nasm.us/">
  <Image class={height} src="/technologies/nasm.svg" alt="NASM" showTooltip />
</Link>
