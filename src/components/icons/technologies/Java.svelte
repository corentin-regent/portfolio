<script context="module">
  import java from '$assets/technologies/java.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.oracle.com/java/technologies/">
  <Image class={imgClass} src={java} alt="Java" showTooltip />
</Link>
