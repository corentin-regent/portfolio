<script module>
  import linkedin from '$assets/logos/linkedin.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={linkedin} alt="LinkedIn" showTooltip />
