<script module>
  import Link from '$components/links/Primary.svelte';
</script>

<script>
  const { message, resolve } = $props();
</script>

{message('text-portfolio-until-github-pages')}<Link {resolve} url="https://pages.github.com/">
  Github Pages
</Link>{message('text-portfolio-after-github-pages')}
