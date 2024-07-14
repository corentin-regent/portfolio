<script context="module">
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls } = $props();
</script>

<h4 class={classes(cls, 'mb-1 text-lg font-semibold')}>
  {@render children()}
</h4>
