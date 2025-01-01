<script module>
  import polytech from '$assets/logos/polytech.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={polytech} alt="Polytech" showTooltip />
