<script module>
  import Link from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('text-portfolio-until-github-pages')}<Link url="https://pages.github.com/">
  Github Pages
</Link>{$messages.get('text-portfolio-after-github-pages')}
