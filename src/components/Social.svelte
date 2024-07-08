<script context="module">
  import Link from '$components/links/Base.svelte';
  import classes from '$utils/classes.js';
</script>

<script>
  const { icon, linkUrl, text, width, height, iconClass } = $props();
</script>

<div class="font-semibold flex items-center">
  <Link url={linkUrl} class="rounded-full overflow-hidden z-[1] text-text-light">
    <svelte:component
      this={icon}
      class={classes(iconClass, width, height, 'bg-gradient-to-t gradient-bg')}
    />
  </Link>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 10" class={classes(height, '-ml-0.5')}>
    <path d="M 0 5 L 5 9" stroke="currentColor" stroke-width="0.4" />
  </svg>
  <Link
    url={linkUrl}
    class={classes(
      'pt-1 relative after:absolute after:-bottom-1.5 after:left-0 after:-ml-[1px]',
      'after:h-[0.15rem] after:w-full after:bg-text1 after:rounded'
    )}
  >
    {text}
  </Link>
</div>
