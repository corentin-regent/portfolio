<script context="module">
  import azurePipelines from '$assets/technologies/azure-pipelines.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://azure.microsoft.com/products/devops/pipelines/">
  <Image class={imgClass} src={azurePipelines} alt="Azure Pipelines" showTooltip />
</Link>
