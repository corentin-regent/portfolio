<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://developer.mozilla.org/docs/Web/CSS">
  <Image class={height} src="/technologies/css.svg" alt="CSS" showTooltip />
</Link>
