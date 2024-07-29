<script context="module">
  import airflow from '$assets/technologies/airflow.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://airflow.apache.org/">
  <Image class={imgClass} src={airflow} alt="Airflow" showTooltip />
</Link>
