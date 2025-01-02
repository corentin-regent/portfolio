<script>
  const { children, class: cls, for: for_, ...restProps } = $props();
</script>

<label {...restProps} for={for_} class={[cls, 'font-semibold text-sm uppercase']}>
  {@render children()}
</label>
