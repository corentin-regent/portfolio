<script context="module">
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls } = $props();
</script>

<h2 class={classes(cls, 'uppercase mb-2 text-2xl font-bold')}>
  {@render children()}
</h2>
