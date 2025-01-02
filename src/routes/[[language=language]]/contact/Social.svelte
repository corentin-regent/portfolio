<script module>
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { message, resolve, Icon, linkUrl, text, width, height, iconClass } = $props();
</script>

<div class="flex items-center justify-center -ml-1.5">
  <Link {resolve} url={linkUrl} class="rounded-full overflow-hidden z-[1] text-text-light">
    <Icon {message} class={[iconClass, width, height, 'bg-gradient-to-t primary-gradient-bg']} />
  </Link>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 603 110"
    class={[height, 'absolute ml-11']}
    stroke="currentColor"
    stroke-width="5"
    fill="none"
  >
    <line x1="0" y1="50" x2="36" y2="80" />
    <path d="M36,80 C48,90 50,90 60,90" />
    <line x1="60" y1="90" x2="600" y2="90" stroke-linecap="round" />
  </svg>
  <div class="flex justify-center ml-5 w-56 font-semibold z-[1]">
    <Link {resolve} url={linkUrl}>
      {text}
    </Link>
  </div>
</div>
