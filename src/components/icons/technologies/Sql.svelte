<script context="module">
  import Link from '$components/links/Base.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://wikipedia.org/wiki/Structured_Query_Language">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="27 7 186 236"
    class={height}
    stroke="#df6c20"
    stroke-width="15"
  >
    <title>SQL</title>
    <desc>{$messages.get('technology-svg-desc', 'SQL')}</desc>

    <ellipse cx="120" cy="50" ry="35" rx="85" fill="none" />
    <path
      d="m35,50 v150  a 85,35 1 1 0 170,0 v-150 m-170,50  a 85,35 1 1 0 170,0 m-170,50 a 85,35 1 1 0 170,0"
      fill="none"
    />
  </svg>
</Link>
