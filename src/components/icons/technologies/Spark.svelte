<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://spark.apache.org/">
  <Image class={imgClass} src="/technologies/spark.svg" alt="Spark" showTooltip />
</Link>
