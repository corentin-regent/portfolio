<script context="module">
  import resolve from '$stores/navigation/resolve.svelte.js';
</script>

<script>
  const { children, url, endpoint, language, ...restProps } = $props();
  let href = $derived(url ?? $resolve({ endpoint, language }));
</script>

<a {...restProps} {href}>
  {@render children()}
</a>
