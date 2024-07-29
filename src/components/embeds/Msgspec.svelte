<script context="module">
  import EmbeddedIcon from '$components/embeds/Icon.svelte';
  import Msgspec from '$logos/Msgspec.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<EmbeddedIcon {...restProps}>
  <Msgspec />
</EmbeddedIcon>
