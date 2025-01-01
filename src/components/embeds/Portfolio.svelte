<script module>
  import EmbeddedIcon from '$components/embeds/Icon.svelte';
  import Favicon from '$components/icons/Favicon.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<EmbeddedIcon {...restProps}>
  <Favicon />
</EmbeddedIcon>
