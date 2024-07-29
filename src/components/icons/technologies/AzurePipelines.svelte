<script context="module">
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://azure.microsoft.com/products/devops/pipelines/">
  <Image
    class={imgClass}
    src="/technologies/azure-pipelines.svg"
    alt="Azure Pipelines"
    showTooltip
  />
</Link>
