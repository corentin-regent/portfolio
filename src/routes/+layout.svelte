<script context="module">
  import Footer from '$components/Footer.svelte';
  import Header from '$components/Header.svelte';
  import Theme from '$runes/theme/enum.js';
  import theme from '$runes/theme/theme.svelte.js';
  import messages from '$stores/i18n/messages.svelte.js';
  import availableLanguages from '$stores/language/available.js';
  import defaultLanguage from '$stores/language/default.js';
  import selectedLanguage from '$stores/language/selected.svelte.js';
  import resolve from '$stores/navigation/resolve.svelte.js';
  import classes from '$utils/classes.js';
  import '../app.css';
</script>

<script>
  const { children } = $props();

  let isDarkTheme = $derived.by(() => {
    const themeColor = theme.selected === Theme.SYSTEM ? theme.system : theme.selected;
    return themeColor === Theme.DARK;
  });
</script>

<svelte:head>
  <title>{$messages.get('page-title')} • {$messages.get('my-portfolio')}</title>
  <meta name="description" content={$messages.get('page-description')} />
  <meta name="author" content={$messages.get('my-name')} />

  <meta lang={$selectedLanguage} />
  <meta charset="utf-8" />

  <meta name="color-scheme" content="dark light" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {#each availableLanguages as language}
    <link rel="alternate" hreflang={language} href={$resolve({ language, absolute: true })} />
  {/each}
  <link
    rel="alternate"
    hreflang="x-default"
    href={$resolve({ language: defaultLanguage, absolute: true })}
  />
  <link rel="author" href={$resolve({ endpoint: '/', absolute: true })} />
</svelte:head>

<div
  class={classes(
    'flex flex-col w-screen h-screen bg-light text-dark dark:bg-dark dark:text-light',
    isDarkTheme && 'dark'
  )}
>
  <Header />
  <div>⚠️ {$messages.get('wip')}</div>
  {@render children()}
  <Footer />
</div>
