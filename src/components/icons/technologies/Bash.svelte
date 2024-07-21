<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.gnu.org/software/bash/">
  <Image class={height} src="/technologies/bash.svg" alt="Bash" showTooltip />
</Link>
