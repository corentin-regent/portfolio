<script module>
  import Link from '$components/links/Base.svelte';
  import Github from '$logos/Github.svelte';

  const githubRepoLinks = [
    'https://github.com/corentin-regent/portfolio',
    'https://github.com/corentin-regent/portfolio-back',
    'https://github.com/corentin-regent/portfolio-deploy',
  ];
</script>

<script>
  const { message, resolve } = $props();
</script>

<footer
  class={[
    'text-center grid mt-auto mb-4 leading-6',
    'before:bg-linear-to-r before:from-transparent before:via-dark-bg1 dark:before:via-light-bg1',
    'before:h-[1px] before:mb-4 before:mt-2 lg:before:mt-4 before:mx-12 2xl:before:mx-24',
  ]}
>
  <small>
    &copy; 2025 Corentin Régent
    {#each githubRepoLinks as githubRepoLink}
      <Link {resolve} url={githubRepoLink} class="ml-1.5">
        <Github {message} class="w-8 inline" />
      </Link>
    {/each}
  </small>
</footer>
