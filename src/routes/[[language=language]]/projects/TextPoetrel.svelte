<script module>
  import Link from '$components/links/Primary.svelte';
</script>

<script>
  const { message, resolve } = $props();
</script>

{message('text-poetrel-until-github-actions')}<Link {resolve} url="https://python-poetry.org/">
  GitHub Actions
</Link>{message('text-poetrel-until-pypi')}<Link {resolve} url="https://pypi.org/">
  PyPI
</Link>{message('text-poetrel-until-github-marketplace')}<Link
  {resolve}
  url="https://github.com/marketplace/actions/poetrel"
>
  GitHub Marketplace
</Link>.
