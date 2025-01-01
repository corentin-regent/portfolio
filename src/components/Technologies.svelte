<script module>
  import classes from '$utils/classes.js';
</script>

<script>
  const { technologies, class: cls } = $props();
</script>

<ul class={classes('flex flex-wrap gap-2', cls)}>
  {#each technologies as Technology}
    <li>
      <Technology imgClass="h-7" />
    </li>
  {/each}
</ul>
