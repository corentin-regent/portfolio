<script context="module">
  import css from '$assets/technologies/css.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://developer.mozilla.org/docs/Web/CSS">
  <Image class={imgClass} src={css} alt="CSS" showTooltip />
</Link>
