<script>
  const { resolve, children, url, route, language, ...restProps } = $props();
  const href = $derived(url ?? resolve({ route, language }));
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
