<script module>
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls, for: for_, ...restProps } = $props();
</script>

<label {...restProps} for={for_} class={classes(cls, 'font-semibold text-sm uppercase')}>
  {@render children()}
</label>
