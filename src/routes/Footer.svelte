<script module>
  import BaseLink from '$components/links/Base.svelte';
  import PrimaryLink from '$components/links/Primary.svelte';
  import Github from '$logos/Github.svelte';
  import classes from '$utils/classes.js';

  const githubRepoLink = 'https://github.com/corentin-regent/portfolio';
</script>

<script>
  const { message, resolve } = $props();
</script>

<footer
  class={classes(
    'text-center align-middle grid gap-2 mt-auto pb-4 lg:pb-6 leading-6',
    'lg:grid-cols-3 before:col-span-1 lg:before:col-span-3',
    'before:bg-gradient-to-r before:from-transparent before:via-anti-bg1',
    'before:h-[1px] before:my-2 lg:before:my-4 before:mx-12 2xl:before:mx-24'
  )}
>
  <small>&copy; 2024 Corentin Régent</small>

  <div>
    {message('made-with')}&nbsp;<PrimaryLink {resolve} url="https://kit.svelte.dev/"
      >SvelteKit</PrimaryLink
    >
  </div>

  <div>
    <PrimaryLink {resolve} url={githubRepoLink}>
      {message('view-github-repo')}
    </PrimaryLink>
    <BaseLink {resolve} url={githubRepoLink} class="ml-1.5">
      <Github {message} class="w-6 lg:w-8 inline" />
    </BaseLink>
  </div>
</footer>
