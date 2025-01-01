<script module>
  import classes from '$utils/classes.js';
</script>

<script>
  let { value = $bindable(), class: cls, ...restProps } = $props();
</script>

<textarea
  {...restProps}
  class={classes(
    cls,
    'border outline-none border-bg3 bg-bg2 focus:bg-bg1 placeholder-text2 py-2 px-3 rounded-sm'
  )}
  rows="6"
  maxlength="10000"
  bind:value
>
</textarea>
