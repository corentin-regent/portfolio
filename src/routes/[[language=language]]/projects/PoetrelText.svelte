<script context="module">
  import Link from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('poetrel-text-until-github-actions')}
<Link url="https://python-poetry.org/">GitHub Actions</Link>
{$messages.get('poetrel-text-until-pypi')}
<Link url="https://pypi.org/">PyPI</Link>
{$messages.get('poetrel-text-until-github-marketplace')}
<Link url="https://github.com/marketplace/actions/poetrel">GitHub Marketplace</Link>.
