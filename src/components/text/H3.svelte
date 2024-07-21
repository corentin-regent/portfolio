<script context="module">
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls } = $props();
</script>

<h3 class={classes(cls, 'text-xl font-bold')}>
  {@render children()}
</h3>
