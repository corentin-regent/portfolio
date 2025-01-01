<script module>
  import bash from '$assets/technologies/bash.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.gnu.org/software/bash/">
  <Image class={imgClass} src={bash} alt="Bash" showTooltip />
</Link>
