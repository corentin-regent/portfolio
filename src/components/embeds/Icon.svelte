<script>
  const { class: cls, children, ...restProps } = $props();
</script>

<div {...restProps} class={[cls, 'noisy-bg bg-dark-bg1 px-20 flex items-center']}>
  {@render children()}
</div>
