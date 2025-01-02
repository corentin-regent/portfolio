<script module>
  import Input from '$components/inputs/Base.svelte';
</script>

<script>
  let { message, value = $bindable(), ...restProps } = $props();
</script>

<Input {...restProps} type="email" placeholder={message('email-placeholder')} bind:value />
