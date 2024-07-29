<script context="module">
  import cloudera from '$assets/technologies/cloudera.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.cloudera.com/">
  <Image class={imgClass} src={cloudera} alt="Cloudera" showTooltip />
</Link>
