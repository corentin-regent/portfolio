<script module>
  import { assets } from '$app/paths';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={`${assets}/assemblife.webp`} alt="Assemblife" />
