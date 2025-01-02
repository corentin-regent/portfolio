<script module>
  import frenchFlag from '$assets/flags/fr.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { message, ...restProps } = $props();
</script>

<Image {...restProps} src={frenchFlag} alt={message('french')} showTooltip />
