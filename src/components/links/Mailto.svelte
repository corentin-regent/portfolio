<script context="module">
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { email } = $props();
</script>

<Link url={`mailto:${email}`} target="_blank">
  {email}
</Link>
