<script context="module">
  import ChooseLanguage from '$components/ChooseLanguage.svelte';
  import ChooseTheme from '$components/ChooseTheme.svelte';
  import Menu from '$components/Menu.svelte';

  const menuItems = [
    { message: 'home', endpoint: '/' },
    { message: 'experience', endpoint: '/experience' },
    { message: 'projects', endpoint: '/projects' },
    { message: 'contact', endpoint: '/contact' },
  ];
</script>

<header class="py-2 md:py-4 lg:py-6 border-b border-anti-bg2 flex">
  <ChooseTheme elementClass="pl-4 flex items-center flex-1" iconClass="w-8" />
  <Menu
    items={menuItems}
    elementClass="text-center md:leading-10 flex-grow"
    liClass="md:inline md:mx-1.5"
  />
  <ChooseLanguage
    elementClass="flex items-center justify-end pr-2 lg:pr-4 flex-1"
    wrapperClass="flex justify-center xs:inline"
    flagClass="w-12 xs:w-fit xs:h-8 my-1 mx-1 inline rounded-sm"
  />
</header>
