<script module>
  import svelte from '$assets/technologies/svelte.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://svelte.dev">
  <Image class={imgClass} src={svelte} alt="Svelte" showTooltip />
</Link>
