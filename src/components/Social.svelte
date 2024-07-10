<script context="module">
  import Link from '$components/links/Base.svelte';
  import classes from '$utils/classes.js';
</script>

<script>
  const { icon, linkUrl, text, width, height, iconClass } = $props();
</script>

<div class="flex items-center">
  <Link url={linkUrl} class="rounded-full overflow-hidden z-[1] text-text-light">
    <svelte:component
      this={icon}
      class={classes(iconClass, width, height, 'bg-gradient-to-t primary-gradient-bg')}
    />
  </Link>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 603 110"
    class={classes(height, 'absolute ml-11')}
    stroke="currentColor"
    stroke-width="5"
    fill="none"
  >
    <line x1="0" y1="50" x2="36" y2="80" />
    <path d="M36,80 C48,90 50,90 60,90" />
    <line x1="60" y1="90" x2="600" y2="90" stroke-linecap="round" />
  </svg>
  <Link url={linkUrl} class="font-semibold text-center ml-5 w-56 z-[1]">
    {text}
  </Link>
</div>
