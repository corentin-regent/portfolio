<script context="module">
  import EmbeddedIcon from '$components/embeds/Icon.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<EmbeddedIcon {...restProps}>
  <span class="font-bold text-xl text-white whitespace-nowrap -mx-4">Work in progress</span>
</EmbeddedIcon>
