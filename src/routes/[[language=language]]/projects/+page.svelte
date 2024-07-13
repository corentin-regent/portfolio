<script context="module">
  import RateControlEmbed from '$components/embeds/RateControl.svelte';
  import Github from '$components/icons/logos/Github.svelte';
  import Link from '$components/links/Base.svelte';
  import H2 from '$components/text/H2.svelte';
  import H3 from '$components/text/H3.svelte';
  import P from '$components/text/P.svelte';
  import messages from '$stores/i18n/messages.svelte.js';

  const projects = [
    { nameId: 'rate-control', embed: RateControlEmbed },
    { nameId: 'poetrel', embed: RateControlEmbed },
    { nameId: 'assemblife', embed: RateControlEmbed },
    { nameId: 'portfolio', embed: RateControlEmbed },
  ];
</script>

<div class="max-w-screen-md mx-auto">
  <H2>{$messages.get('page-header')}</H2>
  <P>{$messages.get('page-main-text')}</P>
</div>

{#each projects as { nameId, embed }}
  <section class="text-justify md:flex my-4">
    <svelte:component this={embed} class="aspect-video w-72 rounded-lg" />
    <div class="md:ml-2 lg:ml-4">
      <H3>
        {$messages.get(nameId)}
        <Link class="ml-1" url={'https://github.com/corentin-regent/' + nameId}>
          <Github class="inline w-7" />
        </Link>
      </H3>
      <P>{$messages.get(nameId + '-text')}</P>
    </div>
  </section>
{/each}
