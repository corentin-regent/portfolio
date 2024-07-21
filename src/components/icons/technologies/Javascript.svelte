<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://developer.mozilla.org/docs/Web/JavaScript">
  <Image class={height} src="/technologies/javascript.svg" alt="JavaScript" showTooltip />
</Link>
