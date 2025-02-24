<script module>
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';

  import availableLanguages from '$config/language/available.js';
  import defaultLanguage from '$config/language/default.js';
  import {
    getMessage,
    getResolve,
    getSelectedLanguage,
    getTheme,
    setupReactiveContext,
  } from '$runes/index.svelte.js';

  import favicon from '$assets/favicon.svg';
  import '../app.css';
</script>

<script>
  setupReactiveContext();

  const message = $derived(getMessage());
  const resolve = $derived(getResolve());
  const selectedLanguage = $derived(getSelectedLanguage());
  const theme = $derived(getTheme());

  const { children } = $props();
</script>

<svelte:head>
  <title>{message('head-title')} • {message('my-portfolio')}</title>
  <meta name="description" content={message('head-description')} />
  <meta name="author" content="Corentin Régent" />

  <meta lang={selectedLanguage} />
  <meta charset="utf-8" />
  <meta name="robots" content="noindex" />

  <link rel="icon" href={favicon} sizes="any" type="image/svg+xml" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content={theme.colorScheme} />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fafafa" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />

  <link rel="canonical" href={resolve({ absolute: true })} />
  {#each availableLanguages as language}
    <link rel="alternate" hreflang={language} href={resolve({ language, absolute: true })} />
  {/each}
  <link
    rel="alternate"
    hreflang="x-default"
    href={resolve({ language: defaultLanguage, absolute: true })}
  />
  <link rel="author" href={resolve({ route: '/', absolute: true })} />
  <link
    rel="license"
    href="https://github.com/corentin-regent/portfolio?tab=readme-ov-file#license"
  />
</svelte:head>

<!--
The input is positioned at the bottom right of the theme icon
in order to prevent the browser from scrolling back up on toggle
-->
<input
  id="theme-selector"
  type="checkbox"
  class="sr-only absolute left-12 top-20"
  checked={!theme.isSameAsSystem}
  onchange={theme.toggle}
/>

<div
  class="flex flex-col min-w-full min-h-screen bg-light-bg1 dark:bg-dark-bg1 text-text-dark1 dark:text-text-light1"
>
  <Header {message} {resolve} {selectedLanguage} />
  <main class="w-full px-2 lg:px-4 text-center">
    {@render children()}
  </main>
  <Footer {message} {resolve} />
</div>
