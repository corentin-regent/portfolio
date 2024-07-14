<script context="module">
  import Github from '$components/icons/logos/Github.svelte';
  import Link from '$components/links/Base.svelte';
  import H4 from '$components/text/H4.svelte';
  import P from '$components/text/P.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
</script>

<script>
  const { nameId, embed, text, url, technologies, toLeft, class: cls, ...restProps } = $props();
</script>

<article
  {...restProps}
  class={classes(cls, 'text-justify lg:flex', toLeft && 'md:flex-row-reverse')}
>
  <div class="flex items-center">
    <svelte:component this={embed} class="aspect-video min-w-72 w-72 rounded-lg" />
  </div>
  <div class={classes('flex flex-col', toLeft ? 'md:mr-2 lg:mr-4' : 'md:ml-2 lg:ml-4')}>
    <H4 class={classes('flex items-center gap-2', toLeft && 'justify-end')}>
      {$messages.get(nameId)}
      <Link {url}>
        <Github class="inline w-7" />
      </Link>
    </H4>
    <P><svelte:component this={text} /></P>
    <ul class={classes('flex gap-2 mt-auto', toLeft && 'justify-end')}>
      {#each technologies as technology}
        <li>
          <svelte:component this={technology} height="h-7" />
        </li>
      {/each}
    </ul>
  </div>
</article>
