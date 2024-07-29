<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://github.com/features/actions">
  <Image class={imgClass} src="/technologies/github-actions.svg" alt="GitHub Actions" showTooltip />
</Link>
