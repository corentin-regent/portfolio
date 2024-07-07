<script context="module">
  import classes from '$utils/classes.js';
</script>

<script>
  const { icon, children, class: cls, width, height } = $props();
</script>

<div class="font-semibold flex items-center">
  <div class="rounded-full overflow-hidden z-[1] text-text-light">
    <svelte:component
      this={icon}
      class={classes(cls, width, height, 'bg-gradient-to-t gradient-bg')}
    />
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class={classes(height, '-ml-0.5')}>
    <path d="M 0 5 L 5 9" stroke="currentColor" stroke-width="0.4" />
  </svg>
  <div
    class={classes(
      'pt-1 relative after:absolute after:-bottom-1.5 after:left-0 after:-ml-[1px]',
      'after:h-[0.15rem] after:w-full after:bg-text1 after:rounded'
    )}
  >
    {@render children()}
  </div>
</div>
