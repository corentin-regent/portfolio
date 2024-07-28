<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { height, ...restProps } = $props();
</script>

<Link {...restProps} url="https://airflow.apache.org/">
  <Image class={height} src="/technologies/airflow.svg" alt="Airflow" showTooltip />
</Link>
