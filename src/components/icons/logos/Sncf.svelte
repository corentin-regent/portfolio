<script module>
  import sncf from '$assets/logos/sncf.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={sncf} alt="SNCF" showTooltip />
