<script module>
  import englishFlag from '$assets/flags/en.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { message, ...restProps } = $props();
</script>

<Image {...restProps} src={englishFlag} alt={message('english')} showTooltip />
