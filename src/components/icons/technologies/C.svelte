<script module>
  import c from '$assets/technologies/c.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.open-std.org/jtc1/sc22/wg14/">
  <Image class={imgClass} src={c} alt="C" showTooltip />
</Link>
