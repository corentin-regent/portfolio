<script module>
  import scala from '$assets/technologies/scala.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://scala-lang.org/">
  <Image class={imgClass} src={scala} alt="Scala" showTooltip />
</Link>
