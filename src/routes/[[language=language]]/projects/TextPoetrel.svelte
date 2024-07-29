<script context="module">
  import Link from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('text-poetrel-until-github-actions')}<Link url="https://python-poetry.org/">
  GitHub Actions
</Link>{$messages.get('text-poetrel-until-pypi')}<Link url="https://pypi.org/">
  PyPI
</Link>{$messages.get('text-poetrel-until-github-marketplace')}<Link
  url="https://github.com/marketplace/actions/poetrel"
>
  GitHub Marketplace
</Link>.
