<script>
  const { children, ...restProps } = $props();
</script>

<p {...restProps}>
  {@render children()}
</p>
