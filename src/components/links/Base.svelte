<script context="module">
  import resolve from '$stores/navigation/resolve.svelte.js';
</script>

<script>
  const { children, url, route, language, ...restProps } = $props();
  let href = $derived(url ?? $resolve({ route, language }));
</script>

{#if url}
  <a {...restProps} {href} target="_blank">
    {@render children()}
  </a>
{:else}
  <a {...restProps} {href}>
    {@render children()}
  </a>
{/if}
