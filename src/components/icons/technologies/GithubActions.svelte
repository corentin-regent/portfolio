<script context="module">
  import githubActions from '$assets/technologies/github-actions.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://github.com/features/actions">
  <Image class={imgClass} src={githubActions} alt="GitHub Actions" showTooltip />
</Link>
