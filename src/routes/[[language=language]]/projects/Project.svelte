<script module>
  import Link from '$components/links/Base.svelte';
  import Technologies from '$components/Technologies.svelte';
  import H4 from '$components/text/H4.svelte';
  import P from '$components/text/P.svelte';
  import Github from '$logos/Github.svelte';
</script>

<script>
  const { message, resolve, Embed, Text, nameId, urls, technologies, toLeft } = $props();
</script>

<article class={['sm:text-justify flex flex-col', toLeft ? 'lg:flex-row-reverse' : 'lg:flex-row']}>
  <div class="mx-auto hidden lg:block">
    <Embed class="aspect-video min-w-72 w-72 rounded-lg" />
  </div>
  <div class={['flex flex-col', toLeft ? 'lg:mr-4' : 'lg:ml-4']}>
    <H4
      class={[
        'flex items-center justify-center gap-2',
        toLeft ? 'lg:justify-end' : 'lg:justify-start',
      ]}
    >
      {message(nameId)}
      {#each urls as url}
        <Link {resolve} {url}>
          <Github {message} class="inline w-7" />
        </Link>
      {/each}
    </H4>
    <div class="flex flex-col-reverse lg:flex-col grow">
      <P class="mx-auto"><Text {message} {resolve} /></P>
      <Technologies
        {technologies}
        class={[
          'my-2 lg:mb-0 lg:mt-auto justify-center',
          toLeft ? 'lg:justify-end' : 'lg:justify-start',
        ]}
      />
    </div>
  </div>
</article>
