<script module>
  import { page } from '$app/stores';
  import Link from '$components/links/Base.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import resolve from '$stores/navigation/resolve.svelte.js';
  import classes from '$utils/classes.js';

  const trailingSlash = /\/$/;
</script>

<script>
  const { items, elementClass, liClass } = $props();

  const isActive = $derived(
    linkProps =>
      $resolve(linkProps).replace(trailingSlash, '') ===
      $page.url.pathname.replace(trailingSlash, '')
  );
</script>

<nav class={elementClass}>
  <ul>
    {#each items as { message, ...linkProps }}
      <li class={liClass}>
        <Link
          {...linkProps}
          class={classes(
            'uppercase font-bold relative duration-100',
            'after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5',
            'after:bg-primary1 after:transition-all after:duration-250',
            !isActive(linkProps) && 'not-hover:text-text2 not-hover:after:scale-x-0'
          )}
          data-sveltekit-noscroll
        >
          {$messages.get(message)}
        </Link>
      </li>
    {/each}
  </ul>
</nav>
