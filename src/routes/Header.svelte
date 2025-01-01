<script module>
  import Menu from '$components/Menu.svelte';
  import ChooseLanguage from './ChooseLanguage.svelte';
  import ChooseTheme from './ChooseTheme.svelte';

  const menuItems = [
    { message: 'home', route: '/' },
    { message: 'experience', route: '/experience' },
    { message: 'projects', route: '/projects' },
    { message: 'contact', route: '/contact' },
  ];
</script>

<header class="py-2 md:py-4 lg:py-6 border-b border-anti-bg2 flex mb-2 lg:mb-4">
  <ChooseTheme elementClass="pl-4 flex items-center flex-1" iconClass="w-8" />
  <Menu
    items={menuItems}
    elementClass="text-center md:leading-10 flex-grow"
    liClass="md:inline md:mx-1.5 my-0.5"
  />
  <ChooseLanguage
    elementClass="flex items-center justify-end pr-2 lg:pr-4 flex-1"
    wrapperClass="flex justify-center xs:inline"
    flagClass="w-12 xs:w-fit xs:h-8 my-1 mx-1 inline rounded-sm"
  />
</header>
