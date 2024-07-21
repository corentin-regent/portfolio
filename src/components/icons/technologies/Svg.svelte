<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.w3.org/Graphics/SVG/">
  <Image class={height} src="/technologies/svg.svg" alt="SVG" showTooltip />
</Link>
