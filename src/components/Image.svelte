<script>
  import { base as basePath } from '$app/paths';
  const { src, alt, showTooltip = false, ...restProps } = $props();

  const srcWithBasePath = $derived(basePath + src);
</script>

{#if showTooltip}
  <img {...restProps} src={srcWithBasePath} {alt} title={alt} />
{:else}
  <img {...restProps} src={srcWithBasePath} {alt} />
{/if}
