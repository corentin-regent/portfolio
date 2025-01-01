<script module>
  import Flag from '$components/icons/Flag.svelte';
  import Link from '$components/links/Base.svelte';
  import availableLanguages from '$config/language/available.js';
  import selectedLanguage from '$stores/language/selected.svelte.js';
  import classes from '$utils/classes.js';
</script>

<script>
  const { elementClass, wrapperClass, flagClass } = $props();
</script>

<nav class={elementClass}>
  <ul>
    {#each availableLanguages as language}
      <li class="inline">
        <Link class={wrapperClass} {language} data-sveltekit-noscroll>
          <Flag
            {language}
            class={classes(
              flagClass,
              $selectedLanguage !== language && 'filter grayscale-75 hover:grayscale-0 duration-100'
            )}
          />
        </Link>
      </li>
    {/each}
  </ul>
</nav>
