<script module>
  import nginx from '$assets/technologies/nginx.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://nginx.org/en/">
  <Image class={imgClass} src={nginx} alt="Nginx" showTooltip />
</Link>
