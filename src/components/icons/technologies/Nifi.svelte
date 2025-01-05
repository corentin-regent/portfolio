<script module>
  import nifi from '$assets/technologies/nifi.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://nifi.apache.org/">
  <Image class={imgClass} src={nifi} alt="Nifi" showTooltip />
</Link>
