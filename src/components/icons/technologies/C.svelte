<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.open-std.org/jtc1/sc22/wg14/">
  <Image class={height} src="/technologies/c.svg" alt="C" showTooltip />
</Link>
