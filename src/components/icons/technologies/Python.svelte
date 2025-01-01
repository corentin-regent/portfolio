<script module>
  import python from '$assets/technologies/python.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.python.org/">
  <Image class={imgClass} src={python} alt="Python" showTooltip />
</Link>
