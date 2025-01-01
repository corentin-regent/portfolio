<script module>
  import linux from '$assets/technologies/linux.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.kernel.org/">
  <Image class={imgClass} src={linux} alt="Linux" showTooltip />
</Link>
