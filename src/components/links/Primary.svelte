<script module>
  import BaseLink from '$components/links/Base.svelte';
</script>

<script>
  const { children, class: cls, ...restProps } = $props();
</script>

<BaseLink
  {...restProps}
  class={[cls, 'text-primary-dark1 dark:text-primary-light1 hover:underline']}
>
  {@render children()}
</BaseLink>
