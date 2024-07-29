<script context="module">
  import svelteKit from '$assets/technologies/svelte-kit.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://kit.svelte.dev/">
  <Image class={imgClass} src={svelteKit} alt="SvelteKit" showTooltip />
</Link>
