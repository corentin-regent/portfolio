<script context="module">
  import Link from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('portfolio-text-until-github-pages')}
<Link url="https://pages.github.com/">Github Pages</Link>
{$messages.get('portfolio-text-after-github-pages')}
