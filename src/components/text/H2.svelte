<script>
  const { children, class: cls } = $props();
</script>

<h2 class={[cls, 'uppercase text-2xl font-bold']}>
  {@render children()}
</h2>
