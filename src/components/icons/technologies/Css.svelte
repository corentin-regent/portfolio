<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://developer.mozilla.org/docs/Web/CSS">
  <Image class={imgClass} src="/technologies/css.svg" alt="CSS" showTooltip />
</Link>
