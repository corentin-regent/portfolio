<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.kernel.org/">
  <Image class={imgClass} src="/technologies/linux.svg" alt="Linux" showTooltip />
</Link>
