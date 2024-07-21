<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://angular.dev/">
  <Image class={height} src="/technologies/angular.svg" alt="Angular" showTooltip />
</Link>
