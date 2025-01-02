<script module>
  import Link from '$components/links/Primary.svelte';
</script>

<script>
  const { message, resolve } = $props();
</script>

{message('text-msgspec-until-benchmarks')}<Link
  {resolve}
  url="https://jcristharif.com/msgspec/benchmarks.html"
>
  {message('text-msgspec-benchmarks')}
</Link>{message('text-msgspec-until-pr')}<Link
  {resolve}
  url="https://github.com/jcrist/msgspec/pull/692"
>
  {message('this-pr')}
</Link>{message('text-msgspec-after-pr')}
