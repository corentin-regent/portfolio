<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://airflow.apache.org/">
  <Image class={imgClass} src="/technologies/airflow.svg" alt="Airflow" showTooltip />
</Link>
