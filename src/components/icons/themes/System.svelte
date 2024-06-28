<script context="module">
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
  <title>{$messages.get('theme-system')}</title>
  <desc>{$messages.get('theme-system-svg-desc')}</desc>

  <path
    d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"
  />
</svg>
