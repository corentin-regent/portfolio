<script context="module">
  import Image from '$components/Image.svelte';
  import EmbeddedIcon from '$components/embeds/Icon.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<EmbeddedIcon {...restProps}>
  <Image src="/logos/msgspec.svg" alt="msgspec" />
</EmbeddedIcon>
