<script module>
  import nasm from '$assets/technologies/nasm.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.nasm.us/">
  <Image class={imgClass} src={nasm} alt="NASM" showTooltip />
</Link>
