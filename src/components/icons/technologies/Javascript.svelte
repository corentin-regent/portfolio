<script module>
  import javascript from '$assets/technologies/javascript.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://developer.mozilla.org/docs/Web/JavaScript">
  <Image class={imgClass} src={javascript} alt="JavaScript" showTooltip />
</Link>
