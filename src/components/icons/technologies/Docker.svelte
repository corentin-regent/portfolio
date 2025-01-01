<script module>
  import docker from '$assets/technologies/docker.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.docker.com/">
  <Image class={imgClass} src={docker} alt="Docker" showTooltip />
</Link>
