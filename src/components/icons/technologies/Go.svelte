<script module>
  import go from '$assets/technologies/go.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://go.dev/">
  <Image class={imgClass} src={go} alt="Go" showTooltip />
</Link>
