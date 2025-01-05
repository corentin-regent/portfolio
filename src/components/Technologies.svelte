<script>
  const { message, technologies, class: cls } = $props();
</script>

<ul class={[cls, 'flex flex-wrap gap-2']}>
  {#each technologies as Technology}
    <li>
      <Technology {message} imgClass="h-7" />
    </li>
  {/each}
</ul>
