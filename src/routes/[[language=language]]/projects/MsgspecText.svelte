<script context="module">
  import Link from '$components/links/Primary.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

{$messages.get('msgspec-text-until-pr')}
<Link url="https://github.com/jcrist/msgspec/pull/692">{$messages.get('this-pr')}</Link>
{$messages.get('msgspec-text-after-pr')}
