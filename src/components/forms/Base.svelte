<script context="module">
  import { enhance } from '$app/forms';
  import Favicon from '$components/icons/Favicon.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
</script>

<script>
  const { children, class: cls, submitMessageId, ...restProps } = $props();
  let isSending = $state(false);
  let showLoadingIcon = $state(false);
</script>

<form
  {...restProps}
  inert={isSending}
  class={classes(cls, 'grid')}
  use:enhance={() => {
    // use timeouts to support animations
    showLoadingIcon = true;
    setTimeout(() => (isSending = true));
    return async ({ update }) => {
      await update();
      isSending = false;
      setTimeout(() => (showLoadingIcon = false), 500);
    };
  }}
>
  {@render children()}
  <div class="grid grid-cols-5 mt-4">
    {#if showLoadingIcon}
      <div class={classes('duration-500', isSending ? 'opacity-100' : 'opacity-0')}>
        <Favicon class="animate-spin-non-uniform w-10 mx-4 ml-auto" />
      </div>
    {/if}
    <input
      type="submit"
      value={$messages.get(submitMessageId)}
      class={classes(
        'cursor-pointer rounded border border-bg3 col-start-2 col-span-3 leading-10',
        'uppercase font-bold text-text-light animated-primary-bg'
      )}
    />
  </div>
</form>
