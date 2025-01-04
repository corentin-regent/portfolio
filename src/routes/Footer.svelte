<script module>
  import BaseLink from '$components/links/Base.svelte';
  import Github from '$logos/Github.svelte';

  const githubRepoLink = 'https://github.com/corentin-regent/portfolio';
</script>

<script>
  const { message, resolve } = $props();
</script>

<footer
  class={`text-center grid mt-auto mb-4 leading-6
    before:bg-gradient-to-r before:from-transparent before:via-anti-bg1
    before:h-[1px] before:mb-4 before:mt-2 lg:before:mt-4 before:mx-12 2xl:before:mx-24`}
>
  <small>
    &copy; 2025 Corentin Régent
    <BaseLink {resolve} url={githubRepoLink} class="ml-1.5">
      <Github {message} class="w-8 inline" />
    </BaseLink>
  </small>
</footer>
