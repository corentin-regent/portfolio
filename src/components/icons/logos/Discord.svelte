<script module>
  import discord from '$assets/logos/discord.svg';
  import Image from '$components/Image.svelte';
</script>

<script>
  const { ...restProps } = $props();
</script>

<Image {...restProps} src={discord} alt="Discord" showTooltip />
