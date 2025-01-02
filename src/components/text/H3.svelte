<script>
  const { children, class: cls } = $props();
</script>

<h3 class={[cls, 'text-xl font-bold']}>
  {@render children()}
</h3>
