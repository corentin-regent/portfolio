<script>
  let { value = $bindable(), class: cls, ...restProps } = $props();
</script>

<input
  {...restProps}
  class={[
    cls,
    'border border-bg3 outline-none bg-bg2 focus:bg-bg1 placeholder-text2 py-2 px-3 rounded-sm',
  ]}
  bind:value
/>
