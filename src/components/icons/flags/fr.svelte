<script context="module">
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  const { ...restProps } = $props();
</script>

<!--
Does weird stuff to trick anti-aliasing.
Otherwise we would see a bit of gray near the blue edges.
-->

<svg {...restProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
  <title>{$messages.get('french')}</title>
  <desc>{$messages.get('flag-svg-desc', { flag: 'french-flag', language: 'french' })}</desc>

  <defs>
    <linearGradient id="fr-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#002395" />
      <stop offset="33.33%" style="stop-color:#002395" />
      <stop offset="33.33%" style="stop-color:#FFF" />
      <stop offset="66.67%" style="stop-color:#FFF" />
      <stop offset="66.67%" style="stop-color:#ED2939" />
      <stop offset="100%" style="stop-color:#ED2939" />
    </linearGradient>
  </defs>
  <rect width="900" height="600" fill="url(#fr-grad)" />
</svg>
