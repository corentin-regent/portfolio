<script module>
  import ansible from '$assets/technologies/ansible.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://www.ansible.com/">
  <Image class={imgClass} src={ansible} alt="Ansible" showTooltip />
</Link>
