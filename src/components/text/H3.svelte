<script context="module">
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls } = $props();
</script>

<h3 class={classes(cls, 'mb-2 text-xl font-bold')}>
  {@render children()}
</h3>
