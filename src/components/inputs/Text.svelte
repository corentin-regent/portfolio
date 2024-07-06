<script context="module">
  import Input from '$components/inputs/Base.svelte';
</script>

<script>
  let { value = $bindable(), ...restProps } = $props();
</script>

<Input {...restProps} type="text" maxlength="100" bind:value />
