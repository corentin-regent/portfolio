<script context="module">
  import { enhance } from '$app/forms';
  import Favicon from '$components/icons/Favicon.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls, submitMessageId, ...restProps } = $props();
  let isSending = $state(false);
</script>

<form
  {...restProps}
  inert={isSending}
  class={classes(cls, 'grid grid-cols-1 gap-4')}
  use:enhance={() => {
    isSending = true;
    return async ({ update }) => {
      await update();
      isSending = false;
    };
  }}
>
  {@render children()}
  <div class="grid grid-cols-5">
    <div class={classes('duration-500', isSending ? 'opacity-100' : 'opacity-0')}>
      <Favicon class="animate-spin-non-uniform w-10 mx-4 ml-auto" />
    </div>
    <input
      type="submit"
      value={$messages.get(submitMessageId)}
      class={classes(
        'cursor-pointer rounded border border-bg3 col-span-3 leading-10',
        'uppercase font-bold text-text-light animated-primary-bg'
      )}
    />
  </div>
</form>
