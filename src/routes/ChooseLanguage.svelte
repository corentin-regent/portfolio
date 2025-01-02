<script module>
  import Flag from '$components/icons/Flag.svelte';
  import Link from '$components/links/Base.svelte';
  import availableLanguages from '$config/language/available.js';
</script>

<script>
  const { message, resolve, selectedLanguage, elementClass, wrapperClass, flagClass } = $props();
</script>

<nav class={elementClass}>
  <ul>
    {#each availableLanguages as language}
      <li class="inline">
        <Link {resolve} class={wrapperClass} {language} data-sveltekit-noscroll>
          <Flag
            {message}
            {language}
            class={[
              flagClass,
              selectedLanguage !== language && 'filter grayscale-75 hover:grayscale-0 duration-100'
            ]}
          />
        </Link>
      </li>
    {/each}
  </ul>
</nav>
