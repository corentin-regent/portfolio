<script context="module">
  import Footer from '$components/Footer.svelte';
  import Header from '$components/Header.svelte';
  import theme from '$runes/theme/index.svelte.js';
  import messages from '$stores/i18n/messages.svelte.js';
  import availableLanguages from '$stores/language/available.js';
  import defaultLanguage from '$stores/language/default.js';
  import selectedLanguage from '$stores/language/selected.svelte.js';
  import resolve from '$stores/navigation/resolve.svelte.js';
  import '../app.css';
</script>

<script>
  const { children } = $props();
</script>

<svelte:head>
  <title>{$messages.get('page-title')} • {$messages.get('my-portfolio')}</title>
  <meta name="description" content={$messages.get('page-description')} />
  <meta name="author" content="Corentin Régent" />

  <meta lang={$selectedLanguage} />
  <meta charset="utf-8" />

  <meta name="color-scheme" content="dark light" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

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

<input
  id="theme-selector"
  type="checkbox"
  class="sr-only"
  checked={!theme.isSameAsSystem}
  onchange={theme.toggle}
/>

<div class="flex flex-col min-w-screen min-h-screen bg-bg1 text-text1">
  <Header />
  <article class="w-full px-2 lg:px-4 text-center">
    {@render children()}
  </article>
  <Footer />
</div>
