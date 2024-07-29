<script context="module">
  import angular from '$assets/technologies/angular.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://angular.dev/">
  <Image class={imgClass} src={angular} alt="Angular" showTooltip />
</Link>
