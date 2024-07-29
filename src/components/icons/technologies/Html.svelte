<script context="module">
  import html from '$assets/technologies/html.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://developer.mozilla.org/docs/Web/HTML">
  <Image class={imgClass} src={html} alt="HTML" showTooltip />
</Link>
