<script module>
  import { page } from '$app/state';
  import Link from '$components/links/Base.svelte';
  import classes from '$utils/classes.js';
  import withTrailingSlash from '$utils/withTrailingSlash.js';
</script>

<script>
  const { message, resolve, items, elementClass, liClass } = $props();

  const isActive = $derived(
    linkProps => withTrailingSlash(resolve(linkProps)) === withTrailingSlash(page.url.pathname)
  );
</script>

<nav class={elementClass}>
  <ul>
    {#each items as { msg, ...linkProps }}
      <li class={liClass}>
        <Link
          {resolve}
          {...linkProps}
          class={classes(
            'uppercase font-bold relative duration-100',
            'after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5',
            'after:bg-primary1 after:transition-all after:duration-250',
            !isActive(linkProps) && 'not-hover:text-text2 not-hover:after:scale-x-0'
          )}
          data-sveltekit-noscroll
        >
          {message(msg)}
        </Link>
      </li>
    {/each}
  </ul>
</nav>
