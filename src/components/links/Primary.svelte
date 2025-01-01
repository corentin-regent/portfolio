<script module>
  import BaseLink from '$components/links/Base.svelte';
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls, ...restProps } = $props();
</script>

<BaseLink {...restProps} class={classes(cls, 'text-primary1 hover:underline')}>
  {@render children()}
</BaseLink>
