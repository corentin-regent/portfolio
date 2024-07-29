<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://wikipedia.org/wiki/Structured_Query_Language">
  <Image class={imgClass} src="/technologies/sql.svg" alt="SQL" showTooltip />
</Link>
