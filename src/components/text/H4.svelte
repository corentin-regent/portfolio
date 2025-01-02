<script>
  const { children, class: cls } = $props();
</script>

<h4 class={[cls, 'text-lg font-semibold']}>
  {@render children()}
</h4>
