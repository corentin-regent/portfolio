<script context="module">
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('text-polytech-peip-before-math-eg')}<span class="hidden xs:inline">
  ({$messages.get('text-polytech-peip-math-eg')})&nbsp;
</span>{$messages.get('text-polytech-peip-before-physics-eg')}<span class="hidden xs:inline">
  &nbsp;({$messages.get('text-polytech-peip-physics-eg')})
</span>{$messages.get('text-polytech-peip-after-physics-eg')}
