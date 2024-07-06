<script context="module">
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { email, ...restProps } = $props();
</script>

<Link {...restProps} url={`mailto:${email}`} target="_blank" class="font-bold">
  {email}
</Link>
