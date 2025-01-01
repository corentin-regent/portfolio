<script module>
  import classes from '$utils/classes.js';
</script>

<script>
  const { class: cls, ...restProps } = $props();
</script>

<div
  {...restProps}
  class={classes(cls, 'bg-gradient-to-t from-[#0021f3] to-[#62cff4] overflow-hidden')}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <g fill="#fff" transform="translate(10 2)">
      <path
        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
      />
      <path
        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
      />
    </g>
  </svg>
</div>
