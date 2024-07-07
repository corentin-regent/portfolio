<script context="module">
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
</script>

<script>
  const { messageId, for: _for, class: cls, ...restProps } = $props();
</script>

<label {...restProps} for={_for} class={classes(cls, 'font-semibold text-sm uppercase')}>
  {$messages.get(messageId)}
</label>
