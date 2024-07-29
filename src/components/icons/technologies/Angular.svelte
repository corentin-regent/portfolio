<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://angular.dev/">
  <Image class={imgClass} src="/technologies/angular.svg" alt="Angular" showTooltip />
</Link>
