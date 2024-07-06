<script context="module">
  import Input from '$components/inputs/Base.svelte';
  import messages from '$stores/i18n/messages.svelte.js';

  // Taken from https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
</script>

<script>
  let { value=$bindable(), ...restProps } = $props();
</script>

<Input
  {...restProps}
  type="email"
  placeholder={$messages.get('email-placeholder')}
  pattern={emailPattern}
  bind:value
/>
