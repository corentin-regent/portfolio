<script context="module">
  import ChooseLanguage from '$components/ChooseLanguage.svelte';
  import ChooseTheme from '$components/ChooseTheme.svelte';
  import Menu from '$components/Menu.svelte';
  import js from '$runes/js/js.svelte.js';

  const menuItems = [
    { message: 'home', endpoint: '/' },
    { message: 'experience', endpoint: '/experience' },
    { message: 'projects', endpoint: '/projects' },
    { message: 'contact', endpoint: '/contact' },
  ];
</script>

<header class="py-3 lg:py-6 border-b border-gray grid grid-cols-3">
  <Menu
    items={menuItems}
    elementClass="col-start-2 text-center"
    liClass="lg:inline lg:mx-1 xl:mx-1.5"
  />
  <div class="flex items-center justify-end">
    {#if js.isEnabled}
      <ChooseTheme class="w-8 mr-3" />
    {/if}
    <ChooseLanguage elementClass="mr-2 lg:mr-4" flagClass="h-8 mx-1 inline rounded-sm" />
  </div>
</header>
