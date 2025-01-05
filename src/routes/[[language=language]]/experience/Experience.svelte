<script module>
  import Technologies from '$components/Technologies.svelte';
  import H4 from '$components/text/H4.svelte';
  import P from '$components/text/P.svelte';
</script>

<script>
  const {
    message,
    resolve,
    DateUtils,
    Logo,
    Text,
    positionId,
    organization,
    period,
    cityId,
    countryId,
    technologies,
  } = $props();
</script>

<article class="text-left flex gap-2 sm:gap-4">
  <div class="sm:flex sm:items-center mt-1 sm:mt-0">
    <Logo {message} class="w-14 min-w-14 sm:w-24 sm:min-w-24 h-14 sm:h-auto max-h-20" />
  </div>
  <div class="flex flex-col">
    <H4>
      {message(positionId)}
      <div class="sm:inline sm:before:content-['_–_']">
        {organization}
      </div>
    </H4>
    <small class="mb-1">
      {DateUtils.periodToString(...period)}
      <div class="sm:inline sm:before:content-['|_']">
        {message(cityId)}, {message(countryId)}
      </div>
    </small>
    {#if technologies}
      <Technologies {message} {technologies} class="my-1" />
    {/if}
    <P class="xs:text-justify"><Text {message} {resolve} /></P>
  </div>
</article>
