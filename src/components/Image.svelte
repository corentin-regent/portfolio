<script>
  const { alt, showTooltip = false, ...restProps } = $props();
</script>

{#if showTooltip}
  <img {...restProps} {alt} title={alt} />
{:else}
  <img {...restProps} {alt} />
{/if}
