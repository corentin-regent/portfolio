<script module>
  import sopraSteria from '$assets/logos/sopra-steria.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={sopraSteria} alt="Sopra Steria" showTooltip />
