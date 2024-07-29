<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://scala-lang.org/">
  <Image class={imgClass} src="/technologies/scala.svg" alt="Scala" showTooltip />
</Link>
