<script module>
  import Dark from '$components/icons/themes/Dark.svelte';
  import Light from '$components/icons/themes/Light.svelte';
  import classes from '$utils/classes.js';
</script>

<script>
  const { message, elementClass, iconClass } = $props();
  const enhancedIconClass = $derived(classes(iconClass, 'hover:cursor-pointer'));
</script>

<div class={elementClass}>
  <label for="theme-selector" class="dark-only">
    <span class="sr-only">{message('activate-light-theme')}</span>
    <Dark {message} class={enhancedIconClass} />
  </label>

  <label for="theme-selector" class="light-only">
    <span class="sr-only">{message('activate-dark-theme')}</span>
    <Light {message} class={enhancedIconClass} />
  </label>
</div>
