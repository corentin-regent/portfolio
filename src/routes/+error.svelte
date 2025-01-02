<script module>
  import { getMessage } from '$runes/index.svelte.js';
</script>

<script>
  const message = $derived(getMessage());
</script>

{message('looks-like-youre-lost')}
