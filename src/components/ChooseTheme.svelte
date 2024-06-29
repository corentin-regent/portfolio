<script context="module">
  import Dark from '$components/icons/themes/Dark.svelte';
  import Light from '$components/icons/themes/Light.svelte';
  import messages from '$stores/i18n/messages.svelte.js';
  import classes from '$utils/classes.js';
</script>

<script>
  const { elementClass, iconClass } = $props();
  const enhancedIconClass = $derived(classes(iconClass, 'hover:cursor-pointer'));
</script>

<div class={elementClass}>
  <label for="theme-selector" class="dark-only">
    <span class="sr-only">{$messages.get('activate-light-theme')}</span>
    <Dark class={enhancedIconClass} />
  </label>

  <label for="theme-selector" class="light-only">
    <span class="sr-only">{$messages.get('activate-dark-theme')}</span>
    <Light class={enhancedIconClass} />
  </label>
</div>
