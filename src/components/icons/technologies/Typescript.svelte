<script module>
  import typescript from '$assets/technologies/typescript.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.typescriptlang.org/">
  <Image class={imgClass} src={typescript} alt="TypeScript" showTooltip />
</Link>
