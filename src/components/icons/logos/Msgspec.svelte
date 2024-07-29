<script context="module">
  import msgspec from '$assets/logos/msgspec.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={msgspec} alt="msgspec" showTooltip />
