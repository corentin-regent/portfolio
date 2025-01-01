<script module>
  import classes from '$utils/classes.js';
</script>

<script>
  const { class: cls, children, ...restProps } = $props();
</script>

<div {...restProps} class={classes(cls, 'noisy-bg bg-dark-bg1 px-20 flex items-center')}>
  {@render children()}
</div>
