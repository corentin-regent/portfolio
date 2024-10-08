<script context="module">
  import H2 from '$components/text/H2.svelte';
  import P from '$components/text/P.svelte';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';

  import availableLanguages from '$config/language/available.js';
  import defaultLanguage from '$config/language/default.js';
  import theme from '$runes/theme/index.svelte.js';
  import messages from '$stores/i18n/messages.svelte.js';
  import selectedLanguage from '$stores/language/selected.svelte.js';
  import resolve from '$stores/navigation/resolve.svelte.js';

  import favicon from '$assets/favicon.svg';
  import '../app.css';
</script>

<script>
  const { children } = $props();
</script>

<svelte:head>
  <title>{$messages.get('head-title')} • {$messages.get('my-portfolio')}</title>
  <meta name="description" content={$messages.get('head-description')} />
  <meta name="author" content="Corentin Régent" />

  <meta lang={$selectedLanguage} />
  <meta charset="utf-8" />
  <meta name="robots" content="noindex" />

  <link rel="icon" href={favicon} sizes="any" type="image/svg+xml" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark light" />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fafafa" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />

  <link rel="canonical" href={$resolve({ absolute: true })} />
  {#each availableLanguages as language}
    <link rel="alternate" hreflang={language} href={$resolve({ language, absolute: true })} />
  {/each}
  <link
    rel="alternate"
    hreflang="x-default"
    href={$resolve({ language: defaultLanguage, absolute: true })}
  />
  <link rel="author" href={$resolve({ route: '/', absolute: true })} />
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

<div class="flex flex-col min-w-screen min-h-screen bg-bg1 text-text1">
  <Header />
  <main class="w-full px-2 lg:px-4 text-center">
    <div class="max-w-screen-md mx-auto">
      <H2 class="mb-2">{$messages.get('page-header')}</H2>
      <P>{$messages.get('page-main-text')}</P>
    </div>
    {@render children()}
  </main>
  <Footer />
</div>
