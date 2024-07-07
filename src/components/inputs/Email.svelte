<script context="module">
  import Input from '$components/inputs/Base.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
</script>

<script>
  let { value = $bindable(), ...restProps } = $props();
</script>

<Input {...restProps} type="email" placeholder={$messages.get('email-placeholder')} bind:value />
