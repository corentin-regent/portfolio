<script context="module">
  import svg from '$assets/technologies/svg.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.w3.org/Graphics/SVG/">
  <Image class={imgClass} src={svg} alt="SVG" showTooltip />
</Link>
