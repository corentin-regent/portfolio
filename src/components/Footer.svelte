<script context="module">
  import Github from '$components/icons/logos/Github.svelte';
  import BaseLink from '$components/links/Base.svelte';
  import PrimaryLink from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';

  const githubRepoLink = 'https://github.com/corentin-regent/portfolio';
</script>

<footer
  class={classes(
    'text-center align-middle grid gap-2 pb-4 lg:pb-6 leading-6',
    'grid-cols-1 lg:grid-cols-3',
    'before:col-span-1 lg:before:col-span-3',
    'before:bg-gradient-to-r before:from-transparent before:via-anti-bg1',
    'before:h-[0.08rem] before:my-2 lg:before:my-4 before:mx-12 2xl:before:mx-24'
  )}
>
  <small>&copy; 2024 {$messages.get('my-name')}</small>

  <div>
    {$messages.get('made-with')}&nbsp;<PrimaryLink url="https://kit.svelte.dev/" target="_blank">
      {$messages.get('svelte-kit')}
    </PrimaryLink>
  </div>

  <div>
    <PrimaryLink url={githubRepoLink} target="_blank">
      {$messages.get('view-github-repo')}
    </PrimaryLink>
    <BaseLink url={githubRepoLink} target="_blank" class="ml-1.5">
      <Github class="w-6 lg:w-8 inline" />
    </BaseLink>
  </div>
</footer>
