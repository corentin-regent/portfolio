<script module>
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls } = $props();
</script>

<h4 class={classes(cls, 'text-lg font-semibold')}>
  {@render children()}
</h4>
