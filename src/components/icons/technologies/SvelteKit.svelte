<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://kit.svelte.dev/">
  <Image class={imgClass} src="/technologies/svelte-kit.svg" alt="SvelteKit" showTooltip />
</Link>
