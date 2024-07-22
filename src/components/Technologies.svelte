<script context="module">
  import classes from '$utils/classes.js';
</script>

<script>
  const { technologies, class: cls } = $props();
</script>

<ul class={classes('flex flex-wrap gap-2', cls)}>
  {#each technologies as technology}
    <li>
      <svelte:component this={technology} height="h-7" />
    </li>
  {/each}
</ul>
