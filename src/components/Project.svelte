<script context="module">
  import Github from '$components/icons/logos/Github.svelte';
  import Link from '$components/links/Base.svelte';
  import Technologies from '$components/Technologies.svelte';
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
  class={classes(
    cls,
    'sm:text-justify flex flex-col',
    toLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
  )}
>
  <div class="flex items-center mx-auto">
    <svelte:component this={embed} class="aspect-video min-w-72 w-72 rounded-lg" />
  </div>
  <div class={classes('flex flex-col', toLeft ? 'lg:mr-4' : 'lg:ml-4')}>
    <H4
      class={classes(
        'flex items-center justify-center gap-2 mt-2 lg:mt-0',
        toLeft ? 'lg:justify-end' : 'lg:justify-start'
      )}
    >
      {$messages.get(nameId)}
      <Link {url}>
        <Github class="inline w-7" />
      </Link>
    </H4>
    <div class="flex flex-col-reverse h-full lg:flex-col lg:space-between">
      <P class="mx-auto"><svelte:component this={text} /></P>
      <Technologies
        {technologies}
        class={classes(
          'my-2 lg:mb-0 lg:mt-auto justify-center',
          toLeft ? 'lg:justify-end' : 'lg:justify-start'
        )}
      />
    </div>
  </div>
</article>
