<script context="module">
  import springBoot from '$assets/technologies/spring-boot.svg';
  import Image from '$components/Image.svelte';
  import Link from '$components/links/Base.svelte';
</script>

<script>
  const { imgClass, ...restProps } = $props();
</script>

<Link {...restProps} url="https://spring.io/projects/spring-boot">
  <Image class={imgClass} src={springBoot} alt="Spring Boot" showTooltip />
</Link>
